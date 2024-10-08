import React from "react";

function SongRow({ artist, title }) {
  return (
    <li>
      <span><b>{artist}</b></span> – 
      <span><i>{title}</i></span>
    </li>
  );
}

function SongList({ tracks }) {
  const rows = tracks.map((song, index) => {
    return (
      <SongRow
        key={index}
        artist={song?.display?.artists}
        title={song?.display?.title}
      />
    );
  });

  return (
    <div className="SongList-wrapper">
      <ol className="SongList">
        {rows}
      </ol>
    </div>
  );
}

export default SongList;
