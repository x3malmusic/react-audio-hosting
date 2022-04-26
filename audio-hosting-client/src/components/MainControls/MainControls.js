import React from "react";
import { Box } from "@material-ui/core";
import SearchInput from "../SearchInput";
import AppButton from "../AppButton/AppButton";
import useStyles from "./styles";

export default function MainControls({ openDrawer, setOpenModal, setOpenDrawer, editPlaylist, loading, isPlaylistChanged }) {
  const classes = useStyles();

  return(
    <Box className={classes.controls}>
      <SearchInput className={classes.marginRight} focusOnDisable disabled={!openDrawer} />
      <AppButton className={classes.marginRight} onClick={() => setOpenModal(true)}>Open playlist</AppButton>
      <AppButton className={classes.marginRight} onClick={() => setOpenDrawer(!openDrawer)}>Edit playlist</AppButton>
      <AppButton onClick={editPlaylist} disabled={isPlaylistChanged || loading}>Save playlist</AppButton>
    </Box>
  )
}