import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, TextField, Typography } from "@material-ui/core";
import AppButton from "../../components/AppButton/AppButton";
import useStyles from "./styles";

export default function Register({ register }) {
  const classes = useStyles();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")

  const registerUser = () => {
    if (password === repeatPassword) {
      register({ email, password })
    }
  }

  return (
    <Box className={classes.login}>
      <Box className={classes.form}>
        <TextField onChange={(e) => setEmail(e.target.value)} className={classes.input} variant="outlined" label="Email" />
        <TextField type="password" onChange={(e) => setPassword(e.target.value)} className={classes.input} variant="outlined" label="Password" />
        <TextField type="password" onChange={(e) => setRepeatPassword(e.target.value)} className={classes.input} variant="outlined" label="Repeat Password" />
        <Box className={classes.controlsContainer}>
          <AppButton onClick={registerUser} className={classes.btn}>Register</AppButton>
          <Box display="flex" alignItems="center">
            <Typography>Already have an account?</Typography>
            <Link className={classes.link} to="/login">Login</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}