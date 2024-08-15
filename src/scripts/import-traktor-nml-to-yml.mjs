import { readFile, writeFile } from 'node:fs/promises';
import { XMLParser } from 'fast-xml-parser';
import YAML from 'yaml'
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

//--------------------------------------------------------------------------------------------------
// Handle command line arguments.
if (process.argv.length < 3) {
  console.error('Usage: npm run import -- <traktor-nml-history-file>');
  process.exit(1);
}
const traktorNmlFilePath = process.argv[2];

//--------------------------------------------------------------------------------------------------
// Library / utility code (to be moved to module later).

async function getSpotifyAuthToken() {
  let token = null;

  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;


  if (!client_id || !client_secret) {
    return null;
  }

  const params = new URLSearchParams({
    // Client credentials means we can only call "read only" / non user data APIs.
    grant_type: 'client_credentials'
  });
  try {
    const auth = await axios.post(
      'https://accounts.spotify.com/api/token',
      params,
      {
        headers: {
          'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
        }
      }
    )
    token = auth.data.access_token;
  }
  catch(error) {
    console.log( 'Error getting Spotify API token: ' + error );
  }

  return token;
}

async function searchSpotifyMetadata({ artists, title, spotifyToken }) {
  let query = `track:${ title }`;
  artists.forEach(artist => {
    query += ` artist:${ artist }`;
  });

  const results = await axios.get(
    'https://api.spotify.com/v1/search',
    {
      params: {
        q: query,
        type: 'track',
      },
      headers: {
        'Authorization': 'Bearer ' + spotifyToken
      }
    }

  );

  const trackDetails = results?.data?.tracks?.items[0];

  const coverArtUrl = trackDetails?.album?.images[0]?.url;

  return { trackDetails, coverArtUrl };
}

// Strip brackets around version and standardise various common forms.
function normaliseMixVersion( version ) {
  if (!version) {
    return null;
  }

  // Remove any brackets, anywhere.
  version = version.replaceAll(/\(/g, '');
  version = version.replaceAll(/\)/g, '');
  version = version.replaceAll(/\[/g, '');
  version = version.replaceAll(/\]/g, '');
  version = version.replaceAll(/\{/g, '');
  version = version.replaceAll(/\}/g, '');

  // Trim whitespace.
  version = version.trim();

  // Lowercase common words.
  version = version.replaceAll(/original/gi, 'original');
  version = version.replaceAll(/mix/gi, 'mix');
  version = version.replaceAll(/remix/gi, 'remix');
  version = version.replaceAll(/version/gi, 'version');
  version = version.replaceAll(/dub/gi, 'dub');
  version = version.replaceAll(/extended/gi, 'extended');
  version = version.replaceAll(/radio/gi, 'radio');
  version = version.replaceAll(/edit/gi, 'edit');

  return version;
}

function normaliseTitle( title ) {
  // Remove any brackets, anywhere.
  title = title.replaceAll(/\(/g, '');
  title = title.replaceAll(/\)/g, '');
  title = title.replaceAll(/\[/g, '');
  title = title.replaceAll(/\]/g, '');
  title = title.replaceAll(/\{/g, '');
  title = title.replaceAll(/\}/g, '');

  // Trim whitespace.
  title = title.trim();

  // Make "Feat." smaller.
  title = title.replaceAll(/Feat./gi, 'ft.');

  return title;
}

//--------------------------------------------------------------------------------------------------
// Main script - import an nml Traktor history file and convert it to a structured yaml.

const [spotifyToken, fileData]  = await Promise.all([
  getSpotifyAuthToken(),
  readFile(traktorNmlFilePath),
]);

const parserOptions = {
  ignoreAttributes: false,
  attributeNamePrefix: '@.',
};
const parser = new XMLParser(parserOptions);
let nmlData = parser.parse(fileData);

const showDate = new Date().toDateString();
const showDateSnake = showDate.replaceAll(' ', '_').toLowerCase();
const ymlData = {
  'date': showDate,
  genres: [],
  'tracks': []
};

// Extract the relevant song metadata for each track from nml.
nmlData?.NML?.COLLECTION?.ENTRY.forEach(element => {
  const tune = {
    title: element['@.TITLE'],
    artists: element['@.ARTIST'].split(/,\s*/),
    duration: element['@.ARTIST'],
  };

  const webaddress = element?.LOCATION['@.WEBADDRESS'];
  const filename = element?.LOCATION['@.FILE'];

  // Stash the URL or file path so we can later re-sort by play order.
  if ( webaddress ) {
    tune.playlistKey = webaddress;
  } else {
    tune.playlistKey = filename;
  }

  tune.cat_no = element?.INFO['@.CATALOG_NO'];
  tune.genres = element?.INFO['@.GENRE'];
  tune.mix_version = element?.INFO['@.MIX'];
  tune.label = element?.INFO['@.LABEL'];

  ymlData.genres.push(tune.genres);

  tune.remixer = element?.INFO['@.REMIXER'];

  tune.tempo_raw = element?.TEMPO['@.BPM'];
  tune.tempo = Math.round(tune.tempo_raw);

  const seconds = element?.INFO['@.PLAYTIME_FLOAT'];
  if (seconds) {
    const formatter = new Date(0);
    formatter.setSeconds(seconds);
    const secondsString = formatter.getUTCSeconds().toString().padStart(2, '0')
    tune.duration = `${formatter.getUTCMinutes()}:${secondsString}`;
  }

  tune.display = {
    artists: tune.artists.join(' + '),
    title: normaliseTitle( tune.title ) ,
    version: normaliseMixVersion( tune.mix_version ),
  }

  ymlData.tracks.push(tune);
});

// Sort by play order.
// This will also strip any songs in COLLECTION that aren't in the playlist.
const sortedTracks = [];
nmlData?.NML?.PLAYLISTS?.NODE?.SUBNODES?.NODE?.PLAYLIST?.ENTRY.forEach(element => {
  const key = element?.PRIMARYKEY['@.KEY'];
  if (key) {
    const tune = ymlData.tracks.find(tune => key.endsWith(tune.playlistKey));
    if (tune) {
      sortedTracks.push(tune);
    }
  }
});
ymlData.tracks = sortedTracks;

// Async lookup of each track, adding file metadata from Spotify.
if (spotifyToken) {
  for await (const tune of ymlData.tracks) {
    const searchArtists = tune.artists;

    const spotifyDataPromise = searchSpotifyMetadata({
      spotifyToken,
      artists: searchArtists,
      title: tune.title,
    });

    const { trackDetails, coverArtUrl } = await spotifyDataPromise;

    tune.isrc = trackDetails?.external_ids?.isrc;
    tune.spotify = {
      url: trackDetails?.external_urls?.spotify,
      release_date: trackDetails?.album?.release_date,
      coverArtUrl,
    };
  }
}


// Uniquify genres.
// Future: standardise genres.
// Future: split comma separated genres.
ymlData.genres = ymlData.genres.filter((value, index, array) => array.indexOf(value) === index);

// Write output.
const ymlString = YAML.stringify(ymlData);

const outputFilename = `beatsreality-${showDateSnake}.yml`;
const outputFile = `public/shows/${outputFilename}`;
await writeFile(outputFile, ymlString);

console.log(`Wrote ${ymlData.tracks.length} tracks to '${outputFile}'`);
console.log(`View show: http://localhost:3000/dj/${outputFilename}`);
