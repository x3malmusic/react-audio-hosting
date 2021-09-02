import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, TextField, Typography } from "@material-ui/core";
import AppButton from "../../components/AppButton/AppButton";
import useStyles from "./styles";

export default function Login({ login }) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => login({ email, password });

  return (
    <Box className={classes.login}>
      <Box className={classes.form}>
        <TextField value={email} onChange={(e) => setEmail(e.target.value)} className={classes.input} variant="outlined" label="Email" />
        <TextField value={password} type="password" onChange={(e) => setPassword(e.target.value)} className={classes.input} variant="outlined" label="Password" />
        <Box className={classes.controlsContainer}>
          <AppButton onClick={loginUser} className={classes.btn}>Login</AppButton>
          <Box display="flex" alignItems="center">
            <Typography>No account?</Typography>
            <Link className={classes.link} to="/register">Register</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}