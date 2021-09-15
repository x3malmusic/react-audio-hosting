import React, { useState } from "react";
import { createSelectable } from 'react-selectable-fast'
import { Box, Typography } from "@material-ui/core";
import clsx from "clsx";
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import useStyles from "./styles";

function SongCard({ selectableRef, draggable, song, isSelected, isSelecting }) {
  const [hover, setHover] = useState(false)
  const classes = useStyles();

  const dragStartHandler = (e) => {
    if (!isSelected) e.dataTransfer.setData("song", JSON.stringify(song._id));
  }

  return (
    <Box
      ref={selectableRef}
      draggable={draggable}
      onDragStart={dragStartHandler}
      className={clsx(classes.cardContainer, {[classes.selected]: isSelecting || isSelected, selected: isSelecting || isSelected})}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box className={classes.iconContainer}>
        <AudiotrackIcon className={classes.iconMusic} />
        <InsertDriveFileIcon color="primary" className={classes.iconFile} />
      </Box>
      {(!hover || isSelecting || isSelected) && <Typography className={classes.songName} noWrap>{song.original_filename}</Typography>}
      {hover && !isSelecting && !isSelected && <Typography className={classes.fullSongName}>{song.original_filename}</Typography>}
    </Box>
  )
}

export default createSelectable(SongCard)