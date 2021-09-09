import React, { useState } from "react";
import { Box, TextField, Typography, Checkbox, Input, Select, MenuItem } from "@material-ui/core";
import AppButton from "../../components/AppButton/AppButton";
import { DEFAULT_VOLUME, DEFAULT_PLAYLIST } from "../../constants/default_settings";
import useStyles from "./styles";

export default function Settings({ saveUserSettings, email, name, defaultPlaylist, defaultVolume = 50, autoplay = false, playlists }) {
  const classes = useStyles();
  const [userName, setUserName] = useState(name)
  const [defPlaylist, setDefPlaylist] = useState(defaultPlaylist || "")
  const [defVolume, setDefVolume] = useState(defaultVolume)
  const [play, setPlay] = useState(autoplay)

  const saveSettings = () => {
    saveUserSettings({ name: userName, defaultPlaylist: defPlaylist, defaultVolume: defVolume, autoplay: play })
  }

  const setDefaultSettings = () => {
    saveUserSettings({ name: userName, defaultPlaylist: DEFAULT_PLAYLIST, defaultVolume: DEFAULT_VOLUME, autoplay: play })
    setDefPlaylist(DEFAULT_PLAYLIST || "");
    setDefVolume(DEFAULT_VOLUME)
  }

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
        <Checkbox color="primary" checked={play} className={classes.checkbox} onChange={(e) => setPlay(e.target.checked)} />
      </Box>

      <Box className={classes.formRow}>
        <Typography className={classes.label}>Default volume:</Typography>
        <Input className={classes.grow} inputProps={{ className: classes.range }} value={defVolume} onChange={e => setDefVolume(Number(e.target.value))} type="range" min={0} max={100} step={1} disableUnderline />
      </Box>

      <Box className={classes.formRow}>
        <Typography className={classes.label}>Default playlist:</Typography>
        <Select className={classes.grow} onChange={(e) => setDefPlaylist(e.target.value)} value={defPlaylist} >
          {!!playlists?.length && playlists.map(playlist => <MenuItem key={playlist._id} value={playlist._id}>{playlist.name}</MenuItem>)}
        </Select>
      </Box>

      <Box className={classes.formRow}>
        <AppButton className={classes.btn} onClick={saveSettings}>Save changes</AppButton>
        <AppButton className={classes.btn} onClick={setDefaultSettings}>Set to default</AppButton>
      </Box>

    </Box>
  )
}