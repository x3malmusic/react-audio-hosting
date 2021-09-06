import React, { useState } from "react";
import { ListItem, Typography, IconButton } from "@material-ui/core";
import clsx from "clsx";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import CancelIcon from '@material-ui/icons/Cancel';
import useStyles from "./styles";
import { makeDuration } from "../../utils";

export default function PlaylistItem({ original_filename, duration, _id, currentSong, setSong = () => {}, deleteSong }) {
  const classes = useStyles();
  const [hover, setHover] = useState(false)

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
        onClick={() => setSong(_id)}
      >
        {currentSong === _id  ? <VolumeUpIcon /> : <PlayArrowIcon />}
      </IconButton>
      <Typography className={classes.name} noWrap>{original_filename}</Typography>
      <Typography className={classes.duration}>{makeDuration(duration)}</Typography>
      {deleteSong &&
        <IconButton
          color="primary"
          className={clsx(classes.deleteBtn)}
          disabled={!hover}
          onClick={() => deleteSong(_id)}
        >
          <CancelIcon />
        </IconButton>
      }
    </ListItem>
  )
}