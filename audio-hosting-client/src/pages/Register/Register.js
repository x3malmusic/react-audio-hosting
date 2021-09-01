import React from "react";
import { Link } from "react-router-dom";
import { Box, TextField, Typography } from "@material-ui/core";
import AppButton from "../../components/AppButton/AppButton";
import useStyles from "./styles";

export default function Register() {
  const classes = useStyles();

  return (
    <Box className={classes.login}>
      <Box className={classes.form}>
        <TextField className={classes.input} variant="outlined" label="Email" />
        <TextField className={classes.input} variant="outlined" label="Password" />
        <TextField className={classes.input} variant="outlined" label="Repeat Password" />
        <Box className={classes.controlsContainer}>
          <AppButton className={classes.btn}>Register</AppButton>
          <Box display="flex" alignItems="center">
            <Typography>Already have an account?</Typography>
            <Link className={classes.link} to="/login">Login</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}