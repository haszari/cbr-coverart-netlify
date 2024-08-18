import React from "react";

function SongRow({ artist, title }) {
  return `1. **${artist}** – _${title}_\n`;
}

function SongList({ songs }) {
  const rows = songs.map((song, index) => {
    let artistNames = song?.track?.artists.map((current) => current.name);
    return (
      <SongRow
        key={index}
        artist={artistNames.join(" + ")}
        title={song?.track?.name}
      />
    );
  });

  const style = {
    // This is unnecessary, makes the text huge when pasting into Gmail
    // fontSize: '200%',
    backgroundColor: 'white',

  };

  return (
    <pre style={ style }>
      {rows}
    </pre>
  );
}

export default SongList;
