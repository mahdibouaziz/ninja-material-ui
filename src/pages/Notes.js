import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import NoteCard from "../components/NoteCard";
import Masonry from "react-masonry-css";

const url = "http://localhost:8000/notes";

export default function Notes() {
  const [notes, setNotes] = useState(null);

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  useEffect(() => {
    axios.get(url).then((res) => {
      const notes = res.data;
      // console.log(notes);
      setNotes(notes);
    });
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`${url}/${id}`);
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes &&
          notes.map((note) => (
            <div key={note.id}>
              <NoteCard note={note} handleDelete={handleDelete} />
            </div>
          ))}
      </Masonry>
    </Container>
  );
}
