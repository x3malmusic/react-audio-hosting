import React, { useContext, useEffect, useRef, useState } from "react";
import { Box, Drawer } from "@material-ui/core";
import AllSongsList from "../../components/AllSongsList";
import Playlist from "../../components/Playlist";
import AppButton from "../../components/AppButton/AppButton";
import ChoosePlaylistModal from "../../components/Modal/ChoosePlaylist";
import SearchInput from "../../components/SearchInput";
import { PlayerRefContext } from "../../context";
import { ADD_PLAYLIST } from "../../components/Placeholder";
import useStyles from "./styles";

export default function Main({ playlists, changePlaylist }) {
  const classes = useStyles();
  const playerContainerRef = useRef()
  const playerRef = useContext(PlayerRefContext)
  const [openModal, setOpenModal] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)

  useEffect(() => {
    playerContainerRef.current.appendChild(playerRef.current)
  }, [playerRef])

  return (
    <>
      <Box className={classes.controls}>
        <SearchInput className={classes.marginRight} />
        <AppButton className={classes.marginRight}  onClick={() => setOpenModal(true)}>Open</AppButton>
        <AppButton onClick={() => setOpenDrawer(!openDrawer)}>Songs</AppButton>
      </Box>

      <Box className={classes.main}>
        <Box ref={playerContainerRef} className={classes.playerContainer} />
        <Playlist placeholder={ADD_PLAYLIST} />

        <Drawer
          open={openDrawer}
          anchor="bottom"
          variant="persistent"
          className={classes.drawer}
          classes={{ paper: classes.drawerPaper }}
          transitionDuration={{ enter: 1000, exit: 1000 }}
        >
          <AllSongsList />
        </Drawer>
      </Box>

      <ChoosePlaylistModal
        open={openModal}
        setOpen={setOpenModal}
        playlists={playlists}
        changePlaylist={changePlaylist}
      />
    </>
  )
}