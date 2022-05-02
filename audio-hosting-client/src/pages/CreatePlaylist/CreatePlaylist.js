import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Playlist from "../../components/Playlist/Playlist";
import Modal from "../../components/Modal/Modal";
import AllSongsList from "../../components/AllSongsList";
import SearchInput from "../../components/SearchInput";
import SaveNewPlaylistButton from "../../containers/SaveNewPlaylist"
import { DROP_SONGS_HERE } from "../../components/Placeholder/placeholderItems";
import useSelectable from "../../hooks/useSelectable";
import useStyles from "./styles";

export default function CreatePlaylist({ allSongs = [], newPlaylistSongs, setSongs, createNewPlaylist, setName, name }) {
  const classes = useStyles();
  const { selectableRef, setSelectedItems, dropHandler, dragOverHandler, deleteSong } = useSelectable({ playlistSongs: newPlaylistSongs, setSongs })
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Box className={classes.controls}>
        <SearchInput className={classes.input} focusOnDisable />
        <SaveNewPlaylistButton
          disabled={!newPlaylistSongs.length}
          onSave={() => setOpenModal(true)}
          title="Create Playlist"
        />
      </Box>

      <Box className={classes.createPlaylistContainer}>

        <AllSongsList
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
        onClose={() => setOpenModal(false)}
        action={createNewPlaylist}
        content="Enter the name of new playlist"
        inputChange={setName}
        inputValue={name}
        fullWidth
      />
    </>
  )
}