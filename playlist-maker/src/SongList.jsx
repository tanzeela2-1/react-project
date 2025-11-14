import React from "react";

const SongList = ({ songs, onAdd }) => {
  return (
    <div>
      <h2>🎶 All Songs</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            {song.title} – {song.artist}{" "}
            <button onClick={() => onAdd(song)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
