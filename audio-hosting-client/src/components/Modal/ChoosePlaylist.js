import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Select,
  MenuItem
} from "@material-ui/core";
import AppButton from "../AppButton";

export default function ChoosePlaylistModal({ open, onClose, changePlaylist, playlists, ...props }) {
  const [chosenPlaylist, setChosenPlaylist] = useState(playlists?.[0]?._id ? playlists[0]._id : "")

  const setPlaylist = () => {
    changePlaylist(chosenPlaylist)
    onClose();
  }

  const changeHandler = (e) => {
    setChosenPlaylist(e.target.value)
  }

  return (
    <Dialog onClose={onClose} open={open} {...props}>
      <DialogTitle>Open Playlist</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Choose Playlist
        </DialogContentText>
        <Select onChange={changeHandler} value={chosenPlaylist} style={{ minWidth: 120 }}>
          {!!playlists?.length && playlists.map(playlist => <MenuItem key={playlist._id} value={playlist._id}>{playlist.name}</MenuItem>)}
        </Select>
      </DialogContent>
      <DialogActions>
        <AppButton onClick={setPlaylist}>
          Open
        </AppButton>
        <AppButton onClick={onClose}>
          Cancel
        </AppButton>
      </DialogActions>
    </Dialog>
  )
}