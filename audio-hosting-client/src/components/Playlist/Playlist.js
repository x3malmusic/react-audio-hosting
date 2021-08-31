import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import PlaylistItem from "../PlaylistItem/PlaylistItem";
import useStyles from "./styles";

export default function Playlist({ currentSong, songs, getSongs, setSong }) {
  const classes = useStyles();

  useEffect(() => {
    if (!songs.length) getSongs()
  }, [getSongs])

  return (
    <Box className={classes.playlist}>
      {!!songs.length &&
      songs.map((song, index) =>
        <PlaylistItem
          key={song._id}
          setSong={setSong}
          currentSong={currentSong}
          index={index}
          {...song}
        />)}
    </Box>
  )
}