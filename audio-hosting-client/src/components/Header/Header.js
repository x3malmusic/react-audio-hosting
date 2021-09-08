import React from "react";
import { Typography, Box } from "@material-ui/core";
import AppButton from "../AppButton/AppButton";
import useStyles from "./styles";

export default function Header({ logout, email, name }) {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Typography variant="h5">
        Audio Player
      </Typography>
      <Box className={classes.btnContainer}>
        <Typography className={classes.username}>Welcome: <strong> {name || email}</strong></Typography>
        <AppButton onClick={logout} color="default" className={classes.btn}>Log Out</AppButton>
      </Box>
    </header>
  )
}



