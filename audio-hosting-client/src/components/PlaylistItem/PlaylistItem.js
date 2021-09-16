import React, { useState } from "react";
import { Transition } from 'react-transition-group';
import { ListItem, Typography, IconButton } from "@material-ui/core";
import clsx from "clsx";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeDuration } from "../../utils";
import { useStyles, transitionStyles } from "./styles";


export default function PlaylistItem({ setPlay, original_filename, duration, _id, currentSong, setSong = () => {}, deleteSong }) {
  const classes = useStyles();
  const [hover, setHover] = useState(false)

  const clickPlay = () => {
    setPlay(true);
    setSong(_id);
  }

  return (
    <ListItem
      className={clsx(classes.playlistItem, { [classes.chosenSong]: currentSong === _id  })}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <IconButton
        color="primary"
        className={clsx(classes.playBtn, { [classes.playBtnHover]: currentSong === _id || hover })}
        disabled={!hover}
        onClick={clickPlay}
      >
        {currentSong === _id  ? <VolumeUpIcon /> : <PlayArrowIcon />}
      </IconButton>
      <Typography className={classes.name} noWrap>{original_filename}</Typography>
      <Typography className={classes.duration}>{makeDuration(duration)}</Typography>

      <Transition in={!!deleteSong} timeout={100} unmountOnExit mountOnEnter>
        {state => (
          <IconButton
            color="primary"
            className={clsx(classes.deleteBtn)}
            style={{ ...transitionStyles[state] }}
            disabled={!hover}
            onClick={() => deleteSong(_id)}
          >
            <CancelIcon />
          </IconButton>
        )}

      </Transition>
    </ListItem>
  )
}