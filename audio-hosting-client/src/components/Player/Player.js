import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Typography, Box } from "@material-ui/core";
import clsx from "clsx";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { DEFAULT_VOLUME } from "../../constants/default_settings";
import { initAnalyser } from "../../utils/initAnalyser";
import { Context } from "../../context";
import useStyles from "./styles";


export default function Player({ currentSong, playNext, playPrevious, defaultVolume = DEFAULT_VOLUME, songs = [], play, setPlay }) {
  const classes = useStyles();

  const playerRef = useContext(Context)
  const audio = useRef()
  const canvasRef = useRef()

  const [init, setInit] = useState(false)
  const { pathname } = useLocation();

  const isOnMainPage = pathname === "/";

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

  useEffect(() => {
    if (play && songs[currentSong]) audio.current.audio.current.play();
  }, [currentSong, play]);

  useEffect(() => {
    return () => {
      if (play) setPlay(false);
    }
  }, [setPlay, play])

  return (
    <Box className={classes.playerContainer} ref={playerRef}>
      <canvas ref={canvasRef} className={clsx(classes.canvas, { [classes.show]: isOnMainPage })} />
      <Typography noWrap variant="subtitle1">{songs[currentSong]?.original_filename || "--"}</Typography>
      <AudioPlayer
        ref={audio}
        src={songs[currentSong]?.url}
        autoPlayAfterSrcChange={play}
        onPlay={() => clickPlay()}
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