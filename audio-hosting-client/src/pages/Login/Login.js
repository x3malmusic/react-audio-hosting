import React from "react";
import { Link } from "react-router-dom";
import { Box, TextField, Typography } from "@material-ui/core";
import AppButton from "../../components/AppButton/AppButton";
import useStyles from "./styles";

export default function Login() {
  const classes = useStyles();

  return (
    <Box className={classes.login}>
      <Box className={classes.form}>
        <TextField className={classes.input} variant="outlined" label="Email" />
        <TextField className={classes.input} variant="outlined" label="Password" />
        <Box className={classes.controlsContainer}>
          <AppButton className={classes.btn}>Login</AppButton>
          <Box display="flex" alignItems="center">
            <Typography>No account?</Typography>
            <Link className={classes.link} to="/register">Register</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}