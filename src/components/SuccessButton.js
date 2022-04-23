import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import React from "react";
import { Container } from "@mui/material";
import DirectionsRun from "@mui/icons-material/DirectionsRun";
import AlarmOn from "@mui/icons-material/AlarmOn";
import Accessibility from "@mui/icons-material/Accessibility";
import HelpOutlined from "@mui/icons-material/HelpOutlined";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    "&:hover": {
      background: "black",
    },
  },
});
function SuccessButton() {
  const classes = useStyles();
  return (
    <Container>
      <Button
        className={classes.btn}
        onClick={() => alert("Humanity first!")}
        type="submit"
        variant="contained"
        color="secondary"
      >
        Chok
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
