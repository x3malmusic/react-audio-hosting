import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "./styles";

export default function RouterView({ children }) {
  const classes = useStyles();

  return (
    <Box className={classes.contentRoot}>
      {children}
    </Box>
  )
}