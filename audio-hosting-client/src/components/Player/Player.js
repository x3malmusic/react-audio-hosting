import React, { useEffect, useRef, useState } from "react";
import { Typography, Box } from "@material-ui/core";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { initAnalyser } from "../../utils/initAnalyser";
import useStyles from "./styles";


export default function Player({ currentSong, playNext, playPrevious, defaultVolume = 50, songs = [], play, setPlay }) {
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

  const clickPlay = () => {
    initAnalize()
    if (!play) setPlay(true)
  }

  const clickPause = () => {
    if (play) setPlay(false)
  }

  useEffect(() => {
    if (play && songs[currentSong]) audio.current.audio.current.play();
  }, [currentSong, play]);

  useEffect(() => {
    return (play) => {
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
        onPlay={() => clickPlay()}
        onPause={() => clickPause()}
        onClickNext={playNext}
        onClickPrevious={playPrevious}
        onEnded={playNext}
        volume={defaultVolume / 100}
        showSkipControls
        crossOrigin="anonymous"
        showFilledVolume
      />
    </Box>
  )
}