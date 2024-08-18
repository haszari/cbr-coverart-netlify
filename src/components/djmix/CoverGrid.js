
import seedrandom from 'seedrandom';


// import CBRMixerLogo from "./CBRMixerLogo";
import "./CoverGrid.scss";

var prng = seedrandom();

function CoverGridItem({
  artists,
  title,
  version,
  imageUrl
}) {
  let summary = `${ artists } - ${ title }`;
  if (version) {
    summary += ` (${ version })`;
  }
  let classes = "release";
  if (!imageUrl) {
    classes += " gap";
  }
  return (
    <div className={ classes }>
      <div className="summary">{ summary }</div>
      { imageUrl ? ( <img src={ imageUrl } alt={ summary} /> ) : null }
    </div>
  );
}


export default function CoverGrid({ tracks }) {
  if (!tracks) {
    return "No tracks";
  }

  const gapEm = 1;
  const square = Math.ceil( Math.sqrt( tracks.length ) );
  const gridStyles = {
    gridTemplateColumns: `repeat(${ square }, 1fr)`,
    gridColumnGap: `${ gapEm }em`,
    gridRowGap: `${ gapEm }em`,
  }

  const numGaps = square*square - tracks.length;

  // Now we need to disperse the gaps in an aesthetically pleasing way.
  // If 1, add to end (no need to do anything).
  // If == 2, add to start and end.
  // If > 2, add one at start and end and distribute others best we can.
  if ( numGaps === 2) {
    tracks.unshift(null);
    tracks.push(null);
  }
  else if ( numGaps > 2 ) {
    tracks.unshift(null);
    tracks.push(null);

    const gaps = numGaps - 2;
    const availableRows = square - 2;

    if ( gaps <= availableRows ) {
      // If we can fit all the gaps in the available rows, do so.
      for (let i = 0; i < gaps; i++) {
        tracks.splice( square + Math.floor( prng() * square ), 0, null );
      }
    }
    else {
      // We have a lot of gaps so just randomly insert.
      const gapRate = tracks.length / gaps;
      let start = square*square - square;
      for (let i = 0; i < gaps; i++) {
        tracks.splice( Math.floor(start + prng()), 0, null );
        start -= gapRate;
      }
    }
  }

  const cells = tracks.map((tune, index) => {
    const artists = tune?.display?.artists;
    const title = tune?.display?.title;
    const version = tune?.display?.version;

    let imageUrl = tune?.display?.coverArtUrl;
    if ( !imageUrl ) {
      imageUrl = tune?.spotify?.coverArtUrl;
    }

    return (
      <CoverGridItem
        key={index}
        id={index}
        artists={artists}
        title={title}
        version={version}
        imageUrl={imageUrl}
      />
    )
  });

  const styles = {};
  styles.transform = `rotate(${ 5 - Math.round(prng() * 10) }deg)`;

  return (
    <div className='CoverGrid-wrappper' style={styles}>
      <div className='CoverGrid-container' style={ gridStyles }>
      { cells }
      </div>
    </div>
  );
}
