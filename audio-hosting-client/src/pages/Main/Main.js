import React, { useContext, useEffect, useRef, useState } from "react";
import { Box } from "@material-ui/core";
import Playlist from "../../components/Playlist";
import AppButton from "../../components/AppButton/AppButton";
import ChoosePlaylistModal from "../../components/Modal/ChoosePlaylist";
import { ADD_PLAYLIST } from "../../components/Placeholder";
import useStyles from "./styles";
import { Context } from "../../context";

export default function Main({ playlists, changePlaylist }) {
  const classes = useStyles();
  const playerContainerRef = useRef()
  const playerRef = useContext(Context)
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    playerContainerRef.current.appendChild(playerRef.current)
  }, [playerRef])

  return (
    <>
      <Box className={classes.main} >
        <Box ref={playerContainerRef} className={classes.playerContainer} />
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