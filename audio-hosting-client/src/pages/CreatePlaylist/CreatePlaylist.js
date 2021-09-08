import React, { useState } from "react";
import { Box } from "@material-ui/core";
import SongCard from "../../components/SongCard/SongCard";
import Playlist from "../../components/Playlist/Playlist";
import AppButton from "../../components/AppButton/AppButton";
import Modal from "../../components/Modal/Modal";
import { DROP_SONGS_HERE } from "../../components/Placeholder";
import useStyles from "./styles";

export default function CreatePlaylist({ allSongs = [], newPlaylistSongs, setSongs, createNewPlaylist, setName, name }) {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false)

  const dropHandler = (e) => {
    e.preventDefault();
    const addedSong = JSON.parse(e.dataTransfer.getData("song"));
    const exist = newPlaylistSongs.find(s => s === addedSong)

    if (exist) return
    setSongs([ ...newPlaylistSongs, addedSong ])
  }

  const dragOverHandler = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move"
  }

  const deleteSong = (id) => {
    const songs = newPlaylistSongs.filter(song => song !== id)

    setSongs(songs)
  }

  return (
    <>
      <Box className={classes.createPlaylistContainer}>

        <Box className={classes.allSongs}>
          {!!Object.values(allSongs).length && Object.values(allSongs).map(song => <SongCard key={song._id} draggable song={song} />)}
        </Box>

        <Playlist
          placeholder={DROP_SONGS_HERE}
          allSongs={allSongs}
          songs={newPlaylistSongs}
          setSongs={setSongs}
          deleteSong={deleteSong}
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
        />

      </Box>
      <AppButton onClick={() => setOpenModal(true)}>Create Playlist</AppButton>

      <Modal
        title="Create Playlist"
        open={openModal}
        setOpen={setOpenModal}
        action={createNewPlaylist}
        content="Enter the name of new playlist"
        inputChange={setName}
        inputValue={name}
        fullWidth
      />
    </>
  )
}