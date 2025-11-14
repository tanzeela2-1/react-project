import React from "react";

const Playlist = ({ playlist, onRemove }) => {
  return (
    <div>
      <h2>🎧 My Playlist</h2>
      {playlist.length === 0 ? (
        <p>No songs added yet.</p>
      ) : (
        <ul>
          {playlist.map((song) => (
            <li key={song.id}>
              {song.title} – {song.artist}{" "}
              <button onClick={() => onRemove(song.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Playlist;
