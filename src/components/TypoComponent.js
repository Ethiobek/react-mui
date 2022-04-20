import Typography from "@mui/material/Typography";
import React from "react";

function TypoComponent() {
  return (
    <div>
      <Typography variant="h1">Welcome to Material UI Typography</Typography>
      <Typography align="center" color="textSecondary">
        Text Secondary with center alignment
      </Typography>
      <Typography color="secondary">
        Secondary color with no alignment
      </Typography>
      <Typography align="right" color="textPrimary">
        Text Primary with right alignment
      </Typography>
      <Typography variant="h4" color="textSecondary">
        Typography Variants
      </Typography>
      <Typography variant="overline">Subttile One</Typography>
    </div>
  );
}

export default TypoComponent;
