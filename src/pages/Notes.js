import React, { useEffect, useState } from "react";
import axios from "axios";

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

  return (
    <div>{notes && notes.map((note) => <p key={note.id}>{note.title}</p>)}</div>
  );
}
