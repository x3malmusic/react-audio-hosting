import React from "react";
import { 
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@material-ui/core";
import { Formik } from "formik";
import AppButton from "../AppButton";
import { createPlaylistSchema } from "../../utils/validationSchemas";
import useStyles from "./styles"

export default function Modal({ open, onClose, action, title, content, ...props }) {
  const classes = useStyles()

  const create = ({ name }) => {
    action(name)
    onClose()
  }

  const keyListener = (e, submit) => {
    if (e.key === "Enter") submit()
  }

  return (
    <Formik
      initialValues={{ name: '' }}
      validationSchema={createPlaylistSchema}
      onSubmit={create}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ errors, values, handleChange, handleSubmit, touched }) => (
        <Dialog onClose={onClose} open={open} {...props}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {content}
            </DialogContentText>

            <TextField
              id="name"
              autoFocus
              margin="dense"
              label="Playlist Name"
              fullWidth
              error={!!errors.name}
              value={values.name}
              onChange={handleChange}
              onKeyUp={e => keyListener(e, handleSubmit)}
            />
            <Typography className={classes.errorMessage} color="error">{touched.name && errors.name}</Typography>

          </DialogContent>
          <DialogActions>
            <AppButton onClick={handleSubmit}>
              Create
            </AppButton>
            <AppButton onClick={onClose}>
              Cancel
            </AppButton>
          </DialogActions>
        </Dialog>
      )}
    </Formik>
  )
}