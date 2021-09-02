import React, { useState } from "react";
import { Input, LinearProgress, CircularProgress, Box, Typography } from "@material-ui/core";
import AppButton from "../../components/AppButton/AppButton";
import Loader from "../../components/Loader/Loader";
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
      <Input type="file" onChange={chooseSong} inputProps={{ accept: ".mp3"  }} />
      <AppButton onClick={uploadTrack}>
        {loading ? <CircularProgress size={24} className={classes.loader} /> : 'Upload Track'}
      </AppButton>
      <Box className={classes.uploadProgress}>
        <LinearProgress className={classes.progressBar} variant="determinate" value={uploadProgress} />
        <Typography className={classes.progressValue}>{`${uploadProgress}%`}</Typography>
      </Box>
    </>
  )
}