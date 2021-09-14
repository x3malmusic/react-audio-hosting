import React, { useEffect, useRef, useState } from "react";
import { Box } from "@material-ui/core";
import { SelectableGroup } from 'react-selectable-fast'
import SongCard from "../../components/SongCard/SongCard";
import Playlist from "../../components/Playlist/Playlist";
import AppButton from "../../components/AppButton/AppButton";
import Modal from "../../components/Modal/Modal";
import { DROP_SONGS_HERE } from "../../components/Placeholder";
import useStyles from "./styles";

export default function CreatePlaylist({ allSongs = [], newPlaylistSongs, setSongs, createNewPlaylist, setName, name }) {
  const classes = useStyles();
  const selectableRef = useRef();
  const [openModal, setOpenModal] = useState(false)
  const [clickCtrl, setClickCtrl] = useState(false)
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

  const ctrlClickHandler = (e) => {
    if (e.code === "ControlLeft") setClickCtrl(true)
  }

  const ctrlUpClickHandler = (e) => {
    if (e.code === "ControlLeft") setClickCtrl(false)
  }

  const deleteSong = (id) => {
    const songs = newPlaylistSongs.filter(song => song !== id)
    setSongs(songs)
  }

  const selectHandler = (items) => {
    if (items.length) {
      const selectedIds = items.reduce((acc, item) => {
        acc.push(item.props.song._id)
        return acc
      }, [])

      setSelectedItems(selectedIds)
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", ctrlClickHandler)
    document.addEventListener("keyup", ctrlUpClickHandler)
    return () => {
      document.removeEventListener("keydown", ctrlClickHandler)
      document.removeEventListener("keyup", ctrlUpClickHandler)
    }
  }, [])

  return (
    <>
      <Box className={classes.createPlaylistContainer}>

        <SelectableGroup
          ref={selectableRef}
          className={classes.allSongs}
          enableDeselect
          onSelectionFinish={selectHandler}
          resetOnStart={!clickCtrl}
          allowCtrlClick
          ignoreList={[".selected"]}
          disabled={!clickCtrl}
        >
          {!!Object.values(allSongs).length && Object.values(allSongs).map(song => <SongCard key={song._id} draggable song={song} />)}
        </SelectableGroup>

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