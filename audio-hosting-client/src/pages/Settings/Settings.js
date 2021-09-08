import React, { useState } from "react";
import { Box, TextField, Typography, Checkbox, Input, Select, MenuItem } from "@material-ui/core";
import AppButton from "../../components/AppButton/AppButton";
import useStyles from "./styles";

export default function Settings({ email, name, defaultPlaylist = {}, defaultVolume = 50, autoplay = false, playlists }) {
  const classes = useStyles();
  const [userName, setUserName] = useState(name)
  const [defPlaylist, setDefPlaylist] = useState(defaultPlaylist)
  const [defVolume, setDefVolume] = useState(defaultVolume)
  const [play, setPlay] = useState(autoplay)

  return (
    <Box className={classes.settings}>

      <Box className={classes.formRow}>
        <Typography className={classes.label}>Name:</Typography>
        <TextField className={classes.grow} inputProps={{ className: classes.input }} onChange={e => setUserName(e.target.value)} value={userName} variant="outlined" />
      </Box>

      <Box className={classes.formRow}>
        <Typography className={classes.label}>Email:</Typography>
        <TextField className={classes.grow} inputProps={{ className: classes.input }} variant="outlined" value={email} disabled />
      </Box>

      <Box className={classes.formRow}>
        <Typography className={classes.label}>Autoplay:</Typography>
        <Checkbox color="primary" value={play} className={classes.checkbox} onChange={(e) => setPlay(e.target.checked)} />
      </Box>

      <Box className={classes.formRow}>
        <Typography className={classes.label}>Default volume:</Typography>
        <Input className={classes.grow} value={defVolume} onChange={e => setDefVolume(e.target.value)} type="range" min={0} max={100} step={1} disableUnderline />
      </Box>

      <Box className={classes.formRow}>
        <Typography className={classes.label}>Default playlist:</Typography>
        <Select className={classes.grow} onChange={(e) => setDefPlaylist(e.target.value)} value={defPlaylist.name || ""} >
          {!!playlists?.length && playlists.map(playlist => <MenuItem key={playlist._id} value={playlist._id}>{playlist.name}</MenuItem>)}
        </Select>
      </Box>

      <Box className={classes.formRow}>
        <AppButton className={classes.btn}>Save changes</AppButton>
      </Box>

    </Box>
  )
}