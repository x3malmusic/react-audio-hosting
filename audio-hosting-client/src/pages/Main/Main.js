import React, { useContext, useEffect, useRef, useState } from "react";
import { Box, Drawer } from "@material-ui/core";
import AllSongsList from "../../components/AllSongsList";
import Playlist from "../../components/Playlist";
import ChoosePlaylistModal from "../../components/Modal/ChoosePlaylist";
import MainControls from "../../containers/MainControls";
import useSelectable from "../../hooks/useSelectable";
import { PlayerRefContext } from "../../context/PlayerContext";
import { ADD_PLAYLIST } from "../../components/Placeholder/placeholderItems";
import useStyles from "./styles";

export default function Main({ playlists, changePlaylist, songsInPlaylist, setSongs }) {
  const classes = useStyles();
  const playerContainerRef = useRef()
  const playerRef = useContext(PlayerRefContext)
  const { selectableRef, setSelectedItems, dropHandler, dragOverHandler, deleteSong } = useSelectable({ playlistSongs: songsInPlaylist, setSongs })

  const [openModal, setOpenModal] = useState(false)
  const [showMySongsList, setShowMySongsList] = useState(false)

  useEffect(() => {
    playerContainerRef.current.appendChild(playerRef.current)
  }, [playerRef])

  return (
    <>
      <MainControls
        setOpenModal={setOpenModal}
        setShowMySongs={setShowMySongsList}
        showMySongs={showMySongsList}
      />

      <Box className={classes.main}>
        <Box ref={playerContainerRef} className={classes.playerContainer} />
        <Playlist
          placeholder={ADD_PLAYLIST}
          deleteSong={showMySongsList && deleteSong}
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
        />

        <Drawer
          open={showMySongsList}
          anchor="bottom"
          variant="persistent"
          className={classes.drawer}
          classes={{ paper: classes.drawerPaper }}
          transitionDuration={{ enter: 700, exit: 700 }}
        >
          <AllSongsList
            setSelectedItems={setSelectedItems}
            selectableRef={selectableRef}
          />
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