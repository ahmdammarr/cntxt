import React, { useState, useEffect } from "react";
import NewSongForm from "./NewSongFrom";
const Songs = () => {
  const [Songs, setSongs] = useState([
    { title: "Koko Wawa", id: 1 },
    { title: "Oooh Makarina", id: 2 },
    { title: "3aym f ba7r el 3'adr", id: 3 }
  ]);
  const [count, setCount] = useState(1);
  const addSong = title => {
    setSongs([...Songs, { title, id: Math.random() }]);
  };
  useEffect(() => {
    console.log("useEffect Hook", Songs);
  }, [Songs]);
  return (
    <div>
      <ul>
        {Songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setCount(count + 1)}>Count:{count} </button>
    </div>
  );
};

export default Songs;
