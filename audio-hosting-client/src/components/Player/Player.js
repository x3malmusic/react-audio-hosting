import React, { useEffect, useRef, useState } from "react";
import { Typography, Box } from "@material-ui/core";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { initAnalyser } from "../../utils/initAnalyser";
import useStyles from "./styles";


export default function Player({ currentSong, playNext, playPrevious, songs = [], play, setPlay }) {
  const classes = useStyles();
  const audio = useRef()
  const canvasRef = useRef()
  const [init, setInit] = useState(false)

  const initAnalize = () => {
    if (!init) {
      initAnalyser(canvasRef, audio.current.audio.current)
      setInit(true)
    }
  }

  useEffect(() => {
    if (play && songs[currentSong]) audio.current.audio.current.play();
  }, [currentSong, play]);

  useEffect(() => {
    return () => {
      if (play) setPlay(false);
    }
  }, [setPlay, play])

  return (
    <Box className={classes.playerContainer}>
      <canvas ref={canvasRef} className={classes.canvas} />
      <Typography noWrap variant="subtitle1">{songs[currentSong]?.original_filename || "--"}</Typography>
      <AudioPlayer
        ref={audio}
        src={songs[currentSong]?.url}
        autoPlayAfterSrcChange={play}
        onPlay={() => initAnalize()}
        onClickNext={playNext}
        onClickPrevious={playPrevious}
        onEnded={playNext}
        volume={0.5}
        showSkipControls
        crossOrigin="anonymous"
      />
    </Box>
  )
}