import React from "react";
import { Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@material-ui/core";
import AppButton from "../AppButton/AppButton";

export default function Modal({ open, setOpen, action, inputChange, title, inputValue, content, ...props }) {

  const create = (e) => {
    if (!inputValue || inputValue.length < 3) return

    action()
    setOpen(false)
  }

  const changeHandler = (e) => {
    inputChange(e.target.value)
  }

  return (
    <Dialog open={open} {...props}>
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
        <AppButton onClick={() => setOpen(false)}>
          Cancel
        </AppButton>
      </DialogActions>
    </Dialog>
  )
}