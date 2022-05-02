import React from "react";
import { Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@material-ui/core";
import AppButton from "../AppButton";

export default function Modal({ open, onClose, action, inputChange, title, inputValue, content, ...props }) {

  const create = () => {
    if (!inputValue || inputValue.length < 3) return

    action()
    onClose()
  }

  const changeHandler = (e) => {
    inputChange(e.target.value)
  }

  return (
    <Dialog onClose={onClose} open={open} {...props}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {content}
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Playlist Name"
          fullWidth
          value={inputValue}
          onChange={changeHandler}
        />
      </DialogContent>
      <DialogActions>
        <AppButton onClick={create}>
          Create
        </AppButton>
        <AppButton onClick={onClose}>
          Cancel
        </AppButton>
      </DialogActions>
    </Dialog>
  )
}