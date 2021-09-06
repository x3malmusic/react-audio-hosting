import React from "react";
import { Box } from "@material-ui/core";
import Playlist from "../../components/Playlist";
import Player from "../../components/Player";
import useStyles from "./styles";

export default function Main() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.main}>
        <Player />

        <Box className={classes.playlistContainer}>
          <Playlist />
        </Box>
      </Box>
    </>
  )
}