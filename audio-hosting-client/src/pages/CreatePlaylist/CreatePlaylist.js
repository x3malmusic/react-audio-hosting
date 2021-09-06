import React, { useState } from "react";
import { Box } from "@material-ui/core";
import SongCard from "../../components/SongCard/SongCard";
import Playlist from "../../components/Playlist/Playlist";
import AppButton from "../../components/AppButton/AppButton";
import Modal from "../../components/Modal/Modal";
import useStyles from "./styles";

export default function CreatePlaylist({ songs = [], newPlaylistSongs, setSongs, createNewPlaylist, setName, name }) {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false)

  const dropHandler = (e) => {
    e.preventDefault();
    const addedSong = JSON.parse(e.dataTransfer.getData("song"));
    const exist = Object.values(newPlaylistSongs).find(s => s._id === addedSong._id)

    if (exist) return
    setSongs({ ...newPlaylistSongs, [addedSong._id]: addedSong })
  }

  const dragOverHandler = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move"
  }

  const deleteSong = (id) => {
    const songs = {...newPlaylistSongs}
    delete songs[id]

    setSongs(songs)
  }

  return (
    <>
      <Box className={classes.createPlaylistContainer}>

        <Box className={classes.allSongs}>
          {!!Object.values(songs).length && Object.values(songs).map(song => <SongCard key={song._id} draggable song={song} />)}
        </Box>

        <Playlist
          songs={Object.values(newPlaylistSongs)}
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