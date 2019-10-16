import React, { useState } from "react";

const NewFormSong = ({ addSong }) => {
  const [title, setTitle] = useState("");
  const handlSubmit = e => {
    e.preventDefault();
    addSong(title);
  };
  return (
    <div>
      <form onSubmit={handlSubmit}>
        <label>Add Song</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewFormSong;
