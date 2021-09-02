import React from "react";
import { Box, CircularProgress } from "@material-ui/core";
import useStyles from "./styles";

export default function Loader({ className, ...props }) {
  const classes = useStyles();

  return(
    <Box className={classes.loaderContainer}>
      <CircularProgress className={className} {...props} />
    </Box>
  )
}