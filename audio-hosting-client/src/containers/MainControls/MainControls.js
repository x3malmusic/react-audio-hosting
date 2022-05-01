import React from "react";
import { Box } from "@material-ui/core";
import SearchInput from "../../components/SearchInput";
import AppButton from "../../components/AppButton";
import SavePlaylistChanges from "../SavePlaylistChanges";
import useStyles from "./styles";

export default function MainControls({ showMySongs, setOpenModal, setShowMySongs, editPlaylist, isPlaylistChanged }) {
  const classes = useStyles();

  return(
    <Box className={classes.controls}>
      <SearchInput className={classes.marginRight} focusOnDisable disabled={!showMySongs} />
      <AppButton className={classes.marginRight} onClick={() => setOpenModal(true)}>Open playlist</AppButton>
      <AppButton className={classes.marginRight} onClick={() => setShowMySongs(!showMySongs)}>Edit Playlist</AppButton>
      <SavePlaylistChanges onSave={editPlaylist} title="Save playlist" disabled={isPlaylistChanged} />
    </Box>
  )
}