import React, { useEffect, useRef, useState } from "react";
import { Typography, Box } from "@material-ui/core";
import AudioPlayer from 'react-h5-audio-player';
import AudioSpectrum from "react-audio-spectrum/lib/AudioSpectrum";
import 'react-h5-audio-player/lib/styles.css';
import useStyles from "./styles";

export default function Player({ currentSong, songs, play, setSong }) {
  const classes = useStyles();
  const audio = useRef()
  const [audioInit, setAudioInit] = useState(false)

  useEffect(() => {
    if (audio.current.audio.current) {
      audio.current.audio.current.id = "audio"
      setAudioInit(true)
    }
    if (play && songs[currentSong]) audio.current.audio.current.play();
  }, [currentSong, play]);

  return (
    <Box className={classes.playerContainer}>
      {audioInit &&
        <AudioSpectrum
          id="audio-canvas"
          height={200}
          width={300}
          audioId="audio"
          capColor={'red'}
          capHeight={2}
          meterWidth={2}
          meterCount={512}
          meterColor={[
            {stop: 0, color: '#f00'},
            {stop: 0.5, color: '#0CD7FD'},
            {stop: 1, color: 'red'}
          ]}
          gap={4}
        />
      }
      <Typography noWrap variant="subtitle1">{songs[currentSong]?.original_filename || "--"}</Typography>
      <AudioPlayer
        ref={audio}
        src={songs[currentSong]?.url}
        autoPlayAfterSrcChange={play}
        onClickNext={() => setSong(currentSong + 1)}
        onClickPrevious={() => setSong(currentSong - 1)}
        showSkipControls
        crossOrigin="anonymous"
      />
    </Box>
  )
}