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
import AppButton from "../AppButton/AppButton";

export default function ChoosePlaylistModal({ open, setOpen, changePlaylist, playlists, ...props }) {
  const [chosenPlaylist, setChosenPlaylist] = useState("")

  const setPlaylist = () => {
    changePlaylist(chosenPlaylist)
    setOpen(false)
  }

  const changeHandler = (e) => {
    setChosenPlaylist(e.target.value)
  }

  return (
    <Dialog open={open} {...props}>
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
        <AppButton onClick={() => setOpen(false)}>
          Cancel
        </AppButton>
      </DialogActions>
    </Dialog>
  )
}