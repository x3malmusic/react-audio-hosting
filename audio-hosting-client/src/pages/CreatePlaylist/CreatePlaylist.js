import React from "react";
import { Box } from "@material-ui/core";
import SongCard from "../../components/SongCard/SongCard";
import useStyles from "./styles";

export default function CreatePlaylist({ songs = [] }) {
  const classes = useStyles();

  return (
    <Box className={classes.createPlaylistContainer}>
      <Box className={classes.allSongs}>
        {!!songs.length && songs.map(song => <SongCard key={song._id} song={song} />)}
      </Box>
      <Box className={classes.newPlaylist}>
        new playlist
      </Box>
    </Box>
  )
}