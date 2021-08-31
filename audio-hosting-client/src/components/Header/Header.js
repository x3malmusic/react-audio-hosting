import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./styles";

export default function Header() {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Box className={classes.logo}>
        <Typography variant="h5" className={classes.logoText}>
          header
        </Typography>
      </Box>
    </header>
  )
}



