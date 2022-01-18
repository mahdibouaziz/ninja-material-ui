import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid } from "@mui/material";
import NoteCard from "../components/NoteCard";

const url = "http://localhost:8000/notes";

export default function Notes() {
  const [notes, setNotes] = useState(null);

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
      <Grid container spacing={3}>
        {notes &&
          notes.map((note) => (
            <Grid item key={note.id} xs={12} md={6} lg={4}>
              <NoteCard note={note} handleDelete={handleDelete} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
