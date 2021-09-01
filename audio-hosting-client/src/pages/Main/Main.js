import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import Playlist from "../../components/Playlist";
import Player from "../../components/Player";
import useStyles from "./styles";

export default function Main({ setPlay }) {
  const classes = useStyles();

  useEffect(() => {
    return setPlay(false)
  }, [setPlay])

  return (
    <>
      <Box className={classes.main}>
        <Player />
        <Playlist />
      </Box>
    </>
  )
}