import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import React from "react";
import { Container } from "@mui/material";

function SuccessButton() {
  return (
    <Container>
      <Button
        onClick={() => alert("Humanity first!")}
        type="submit"
        variant="contained"
        color="secondary"
      >
        Submit
      </Button>

      <ButtonGroup variant="contained">
        <Button>Set</Button>
        <Button>Ready</Button>
        <Button>Go</Button>
      </ButtonGroup>
    </Container>
  );
}

export default SuccessButton;
