import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Playlist from "../../components/Playlist";
import Player from "../../components/Player";
import AppButton from "../../components/AppButton/AppButton";
import ChoosePlaylistModal from "../../components/Modal/ChoosePlaylist";
import { ADD_PLAYLIST } from "../../components/Placeholder";
import useStyles from "./styles";

export default function Main({ playlists, changePlaylist }) {
  const [openModal, setOpenModal] = useState(false)
  const classes = useStyles();

  return (
    <>
      <Box className={classes.main}>
        <Player />
        <Playlist placeholder={ADD_PLAYLIST} />
      </Box>
      <AppButton onClick={() => setOpenModal(true)}>Open</AppButton>
      <ChoosePlaylistModal
        open={openModal}
        setOpen={setOpenModal}
        playlists={playlists}
        changePlaylist={changePlaylist}
      />
    </>
  )
}