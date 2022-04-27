import React, { useState } from "react";
import { Input, LinearProgress, CircularProgress, Box, Typography } from "@material-ui/core";
import AppButton from "../../components/AppButton";
import useStyles from "./styles";

export default function UploadTrack({ upload, loading }) {
  const classes = useStyles();
  const [file, setFile] = useState()
  const [uploadProgress, setUploadProgress] = useState(0);

  const chooseSong = (e) => {
    if (!e.target.files.length) return
    setFile(e.target.files[0])
  }

  const uploadTrack = () => {
    if (!file) return
    upload({ file, setUploadProgress })
  }

  return (
    <>
      <Box className={classes.controls}>
        <Input className={classes.input} type="file" onChange={chooseSong} inputProps={{ accept: ".mp3" }} />
        <AppButton onClick={uploadTrack} disabled={!file}>
          {loading ? <CircularProgress size={24} className={classes.loader} /> : 'Upload Track'}
        </AppButton>
      </Box>

      {loading &&
        <Box className={classes.uploadProgress}>
          <LinearProgress className={classes.progressBar} variant="determinate" value={uploadProgress} />
          <Typography className={classes.progressValue}>{`${uploadProgress}%`}</Typography>
        </Box>
      }
    </>
  )
}