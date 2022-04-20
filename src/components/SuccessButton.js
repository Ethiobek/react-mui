import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import React from "react";
import { Container } from "@mui/material";
import DirectionsRun from "@mui/icons-material/DirectionsRun";
import AlarmOn from "@mui/icons-material/AlarmOn";
import Accessibility from "@mui/icons-material/Accessibility";

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
        <Button color="primary">
          <AlarmOn color="warning" />
          Set
        </Button>
        <Button color="error">
          <Accessibility style={{ color: "black" }} />
          Ready
        </Button>
        <Button color="success">
          <DirectionsRun />
          Go
        </Button>
      </ButtonGroup>
    </Container>
  );
}

export default SuccessButton;
