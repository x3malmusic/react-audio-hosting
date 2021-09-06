import React from "react";
import { Box, Typography } from "@material-ui/core";
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import useStyles from "./styles";

export default function SongCard({ song }) {
  const classes = useStyles();

  const dragStartHandler = (e) => {
    e.dataTransfer.setData("song", JSON.stringify(song));
  }

  return (
    <Box className={classes.cardContainer} draggable onDragStart={dragStartHandler}>
      <Box className={classes.iconContainer}>
        <AudiotrackIcon className={classes.iconMusic} />
        <InsertDriveFileIcon className={classes.iconFile} />
      </Box>
      <Typography className={classes.songName} noWrap>{song.original_filename}</Typography>
    </Box>
  )
}