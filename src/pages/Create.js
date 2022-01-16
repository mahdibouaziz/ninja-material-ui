import React from "react";
import { Button, Typography, Container } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "red",
    fontSize: 60,
  },
});

export default function Create() {
  const classes = useStyles();

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

      <Button
        variant="contained"
        color="primary"
        type="submit"
        endIcon={<SendIcon />}
      >
        Submit
      </Button>
    </Container>
  );
}
