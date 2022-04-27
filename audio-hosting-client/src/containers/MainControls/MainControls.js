import React from "react";
import { Box } from "@material-ui/core";
import SearchInput from "../../components/SearchInput";
import AppButton from "../../components/AppButton";
import SavePlaylistChanges from "../SavePlaylistChanges";
import useStyles from "./styles";

export default function MainControls({ openDrawer, setOpenModal, setOpenDrawer, editPlaylist, isPlaylistChanged }) {
  const classes = useStyles();

  return(
    <Box className={classes.controls}>
      <SearchInput className={classes.marginRight} focusOnDisable disabled={!openDrawer} />
      <AppButton className={classes.marginRight} onClick={() => setOpenModal(true)}>Open playlist</AppButton>
      <AppButton className={classes.marginRight} onClick={() => setOpenDrawer(!openDrawer)}>Edit playlist</AppButton>
      <SavePlaylistChanges onSave={editPlaylist} title="Save playlist" disabled={isPlaylistChanged} />
    </Box>
  )
}