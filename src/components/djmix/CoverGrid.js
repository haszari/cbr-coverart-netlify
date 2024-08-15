// import React, { useEffect } from "react";

// import { round, shuffle } from "lodash";

// import { useSelector } from "react-redux";

// import classnames from "classnames";

import store from "../store/store.js";

import NumberedPlaylist from "./NumberedPlaylist.js";
import NumberedPlaylistMarkdown from "./NumberedPlaylistMarkdown.js";

// import { fetchSongs } from "../store/albums";
// import {
//   getStatus,
//   getAlbums,
//   getSongs,
//   getSelectedAlbumId,
// } from "../store/albums/selectors";
// import { getApiToken } from "../store/app/selectors";

import CBRMixerLogo from "./CBRMixerLogo";
import "./Albums.scss";
import "./CoverGrid.scss";


function CoverGridItem({ coverComponent }) {
  return (
    <div className="release ep">
      { coverComponent }
    </div>
  );
}


function Album({ id, albumSongs, isSelected }) {
  const album = albumSongs[0]?.track?.album;
  if (!album) {
    return null;
  }

  const coverImageUrl = album.images[0]?.url;

  const coverComponent = ( <img src={coverImageUrl} alt="" /> );

  return (
    <CoverGridItem
      coverComponent={ coverComponent }
      />
  );
}

function RadioShowCoverGridAndPlaylist({ songs }) {
  // const status = useSelector(getStatus);
  // const spotifyAccessToken = useSelector(getApiToken);
  // const selectedAlbumId = useSelector(getSelectedAlbumId);
  // let albums = useSelector(getAlbums);
  // let songs = useSelector(getSongs);

  // Start loading songs on mount.
  // useEffect(() => {
  //   store.dispatch(fetchSongs({ spotifyAccessToken }));
  // }, [spotifyAccessToken]);

  // if (status === "loading") {
  //   return "Loading songs…";
  // }

  // if (!albums) {
  //   return "Grouping albums…";
  // }

  // const cells = Object.entries(albums).map(([id, albumSongs]) => (
  //   <Album
  //     key={id}
  //     id={id}
  //     albumSongs={albumSongs}
  //     // isSelected={id === selectedAlbumId}
  //   />
  // ));

  // const emptyCell = (
  //   <div className="release ep">
  //     </div>
  // );

  // const shuffled = shuffle( cells );

  // add empty cells to start to make it balanced
  // if (cells.length === 13) {
  //   shuffled.unshift(emptyCell);
  // }
  // const styles = {
  //   transform: `rotate(${ 5 - Math.round(Math.random() * 10) }deg)`,
  // }

  return (
    <>
      {/* <div className='CoverGrid-group'>
        <CBRMixerLogo />
        <div className="Albums-container" style={styles}>{shuffled}</div>
      </div> */}
      <NumberedPlaylist songs={songs} />
      {/* <NumberedPlaylistMarkdown songs={songs} /> */}
    </>
  );
}

export default RadioShowCoverGridAndPlaylist;
