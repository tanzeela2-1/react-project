import React, { useState } from "react";
import SongList from "./SongList";
import Playlist from "./Playlist";

const App = () => {
  const songs = [
    { id: 1, title: "Blinding Lights", artist: "The Weeknd" },
    { id: 2, title: "Levitating", artist: "Dua Lipa" },
    { id: 3, title: "Watermelon Sugar", artist: "Harry Styles" },
    { id: 4, title: "Save Your Tears", artist: "The Weeknd" },
  ];

  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (song) => {
    if (!playlist.find((s) => s.id === song.id)) {
      setPlaylist([...playlist, song]);
    }
  };

  const removeFromPlaylist = (id) => {
    setPlaylist(playlist.filter((song) => song.id !== id));
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around", padding: 20 }}>
      <SongList songs={songs} onAdd={addToPlaylist} />
      <Playlist playlist={playlist} onRemove={removeFromPlaylist} />
    </div>
  );
};

export default App;
