import React, { useEffect, useRef } from "react";
import { Typography, Box } from "@material-ui/core";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import useStyles from "./styles";

export default function Player({ currentSong, songs, play, setSong }) {
  const classes = useStyles();
  const audio = useRef()

  useEffect(() => {
    if (play && songs[currentSong]) audio.current.audio.current.play();
  }, [currentSong, play]);

  return (
    <Box className={classes.playerContainer}>
      <Typography noWrap variant="subtitle1">{songs[currentSong]?.original_filename || "--"}</Typography>
      <AudioPlayer
        ref={audio}
        src={songs[currentSong]?.url}
        autoPlayAfterSrcChange={play}
        onClickNext={() => setSong(currentSong + 1)}
        onClickPrevious={() => setSong(currentSong - 1)}
        showSkipControls
      />
    </Box>
  )
}