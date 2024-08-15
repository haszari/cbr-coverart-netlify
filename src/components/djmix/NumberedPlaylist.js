import React from "react";

function SongRow({ artist, title }) {
  return (
    <li>
      <span><b>{artist}</b></span> – 
      <span><i>{title}</i></span>
    </li>
  );
}

function SongList({ songs }) {
  const rows = songs.map((song, index) => {
    return (
      <SongRow
        key={index}
        artist={song?.display?.artists}
        title={song?.display?.title}
      />
    );
  });

  return (
    <ol className="SongList">
      {rows}
    </ol>
  );
}

export default SongList;
