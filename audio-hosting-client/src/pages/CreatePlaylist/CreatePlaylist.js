import React, { useState } from "react";
import { Box } from "@material-ui/core";
import SongCard from "../../components/SongCard/SongCard";
import Playlist from "../../components/Playlist/Playlist";
import useStyles from "./styles";

export default function CreatePlaylist({ songs = [] }) {
  const classes = useStyles();
  const [newSongs, setNewSongs] = useState([])

  const dropHandler = (e) => {
    e.preventDefault();
    const addedSong = JSON.parse(e.dataTransfer.getData("song"));
    const exist = newSongs.find(s => s._id === addedSong._id)

    if (exist) return
    setNewSongs(state => ([...state, addedSong]))
  }

  const dragOverHandler = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move"
  }


  return (
    <Box className={classes.createPlaylistContainer}>

      <Box className={classes.allSongs}>
        {!!songs.length && songs.map(song => <SongCard key={song._id} song={song} />)}
      </Box>

      <Box
        className={classes.newPlaylist}
        onDrop={dropHandler}
        onDragOver={dragOverHandler}
      >
        <Playlist songs={newSongs} setSongs={setNewSongs} />
      </Box>

    </Box>
  )
}