import React from "react";
import { Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import AppButton from "../AppButton/AppButton";

export default function ConfirmModal({ open, setOpen, action, content, ...props }) {

  const confirmAction = () => {
    action()
    setOpen(false)
  }

  return (
    <Dialog open={open} fullWidth {...props}>
      <DialogTitle>Confirm action</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <AppButton onClick={confirmAction}>
          Confirm
        </AppButton>
        <AppButton onClick={() => setOpen(false)}>
          Cancel
        </AppButton>
      </DialogActions>
    </Dialog>
  )
}