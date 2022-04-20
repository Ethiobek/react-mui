import { Container, Typography } from "@mui/material";
import React from "react";
import SuccessButton from "./SuccessButton";

function Header() {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Welcome to Ethiobek
      </Typography>
      <SuccessButton />
    </Container>
  );
}

export default Header;
