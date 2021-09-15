import React, { useRef, useState } from "react";
import { Box } from "@material-ui/core";
import Playlist from "../../components/Playlist/Playlist";
import AppButton from "../../components/AppButton/AppButton";
import Modal from "../../components/Modal/Modal";
import AllSongsList from "../../components/AllSongsList";
import SearchInput from "../../components/SearchInput";
import { DROP_SONGS_HERE } from "../../components/Placeholder";
import useStyles from "./styles";

export default function CreatePlaylist({ allSongs = [], newPlaylistSongs, setSongs, createNewPlaylist, setName, name }) {
  const classes = useStyles();
  const selectableRef = useRef();
  const [openModal, setOpenModal] = useState(false)
  const [selectedItems, setSelectedItems] = useState([])

  const dropHandler = (e) => {
    e.preventDefault();
    const addedSong = e.dataTransfer.getData("song");

    if (addedSong) {
      const newSongs = [...new Set([ ...newPlaylistSongs, JSON.parse(addedSong) ])]
      return setSongs(newSongs)
    }

    const newSongs = [...new Set([ ...newPlaylistSongs, ...selectedItems ])]
    setSongs(newSongs)
    selectableRef.current.clearSelection()
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
      <Box className={classes.controls}>
        <SearchInput className={classes.input} />
        <AppButton onClick={() => setOpenModal(true)}>Create Playlist</AppButton>
      </Box>

      <Box className={classes.createPlaylistContainer}>

        <AllSongsList
          allSongs={allSongs}
          setSelectedItems={setSelectedItems}
          selectableRef={selectableRef}
        />

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