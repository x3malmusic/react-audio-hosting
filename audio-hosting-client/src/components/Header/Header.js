import React from "react";
import { Typography } from "@material-ui/core";
import AppButton from "../AppButton/AppButton";
import useStyles from "./styles";

export default function Header({ logout }) {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Typography variant="h5">
        Audio Player
      </Typography>
      <AppButton onClick={logout} color="default" className={classes.btn}>Log Out</AppButton>
    </header>
  )
}



