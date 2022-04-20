import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import React from "react";
import { Container } from "@mui/material";
import DirectionsRun from "@mui/icons-material/DirectionsRun";
import AlarmOn from "@mui/icons-material/AlarmOn";
import Accessibility from "@mui/icons-material/Accessibility";
import HelpOutlined from "@mui/icons-material/HelpOutlined";
import ArrowForward from "@mui/icons-material/ArrowForward";

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
          <AlarmOn color="warning" fontSize="small" />
          Set
          <AlarmOn color="warning" fontSize="large" />
        </Button>
        <Button color="error">
          <Accessibility style={{ color: "black" }} />
          Ready
        </Button>
        <Button color="success">
          <DirectionsRun fontSize="small" />
          <DirectionsRun fontSize="medium" />
          <DirectionsRun fontSize="large" />
          Go
        </Button>
      </ButtonGroup>
      <Button
        g
        variant="contained"
        fontSize="large"
        startIcon={<HelpOutlined />}
        endIcon={<ArrowForward />}
      >
        Apply
      </Button>
    </Container>
  );
}

export default SuccessButton;
