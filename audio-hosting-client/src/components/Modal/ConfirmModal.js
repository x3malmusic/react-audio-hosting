import React from "react";
import { Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import AppButton from "../AppButton";

export default function ConfirmModal({ open, onClose, action, content, ...props }) {

  const confirmAction = () => {
    action()
    onClose()
  }

  return (
    <Dialog onClose={onClose} open={open} fullWidth {...props}>
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
        <AppButton onClick={onClose}>
          Cancel
        </AppButton>
      </DialogActions>
    </Dialog>
  )
}