import React, { useState } from "react";
import {
  Button,
  Typography,
  Container,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const fieldStyle = {
  marginTop: "20px",
  marginBottom: "20px",
  display: "block",
};

export default function Create() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const [category, setCategory] = useState("money");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }

    if (title && details) {
      const note = { title, details, category };
      console.log(note);

      setTitle("");
      setDetails("");
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Note Title"
          fullWidth
          color="secondary"
          variant="outlined"
          required
          style={fieldStyle}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          error={titleError}
        />

        <TextField
          label="Details"
          fullWidth
          color="secondary"
          variant="outlined"
          required
          style={fieldStyle}
          multiline
          rows={4}
          onChange={(e) => setDetails(e.target.value)}
          value={details}
          error={detailsError}
        />

        <FormControl style={fieldStyle}>
          <FormLabel>Note Category</FormLabel>

          <RadioGroup
            row
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              control={<Radio />}
              value="money"
              label="Money"
              color="secondary"
            />
            <FormControlLabel control={<Radio />} value="todos" label="Todos" />
            <FormControlLabel
              control={<Radio />}
              value="reminders"
              label="Reminders"
            />
            <FormControlLabel control={<Radio />} value="work" label="Work" />
          </RadioGroup>
        </FormControl>

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
