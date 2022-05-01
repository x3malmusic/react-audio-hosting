import React, { useState } from "react";
import { Input, LinearProgress, Box, Typography } from "@material-ui/core";
import UploadTrackButton from "../../containers/UploadTrackButton";
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
    <Box className={classes.root}>
      <Box className={classes.controls}>
        <Input className={classes.input} type="file" onChange={chooseSong} inputProps={{ accept: ".mp3" }} />
        <UploadTrackButton
          onSave={uploadTrack}
          disabled={!file}
          title="Upload Track"
          titleOnLoading="Uploading..."
        />
      </Box>

      {loading &&
        <Box className={classes.uploadProgress}>
          <LinearProgress className={classes.progressBar} variant="determinate" value={uploadProgress} />
          <Typography className={classes.progressValue}>{`${uploadProgress}%`}</Typography>
        </Box>
      }
    </Box>
  )
}