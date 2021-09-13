import React, { useState } from "react";
import { Box, TextField, Typography, Input, Select, MenuItem, Divider, Checkbox } from "@material-ui/core";
import AppButton from "../../components/AppButton/AppButton";
import ConfirmModal from "../../components/Modal/ConfirmModal";
import { isEqualArrays } from "../../utils";
import { DEFAULT_VOLUME, DEFAULT_PLAYLIST } from "../../constants/default_settings";
import useStyles from "./styles";

const defaultsArray = [DEFAULT_VOLUME, ""]


export default function Settings({ rememberLastSong, savePlayerSettings, saveUserSettings, email, name, defaultPlaylist, defaultVolume, playlists }) {
  const classes = useStyles();

  const [userName, setUserName] = useState(name)
  const [defPlaylist, setDefPlaylist] = useState(defaultPlaylist || "")
  const [defVolume, setDefVolume] = useState(defaultVolume)
  const [savePlayedSong, setSavePlayedSong] = useState(rememberLastSong)
  const [openModal, setOpenModal] = useState(false)

  const userLocalSettings = [defVolume, defPlaylist];
  const [isChanged, setIsChanged] = useState(name === userName)

  const isDefault = isEqualArrays(userLocalSettings, defaultsArray);

  const saveSettings = () => {
    saveUserSettings({ name: userName, defaultPlaylist: defPlaylist, defaultVolume: defVolume })
    setIsChanged(true)
  }

  const saveUserPlayerSettings = () => {
    savePlayerSettings({ defaultPlaylist: defPlaylist, defaultVolume: defVolume, rememberLastSong: savePlayedSong })
    setIsChanged(true)
  }

  const setDefaultSettings = () => {
    saveUserSettings({ defaultPlaylist: DEFAULT_PLAYLIST, defaultVolume: DEFAULT_VOLUME })
    setDefPlaylist("");
    setDefVolume(DEFAULT_VOLUME)
  }

  const changeVolume = (e) => {
    setDefVolume(Number(e.target.value))
  }

  const changePlaylist = (e) => {
    setDefPlaylist(e.target.value)
  }

  const changeName = (e) => {
    setUserName(e.target.value)
    setIsChanged(e.target.value === name)
  }

  const checkLastPlayedSong = (e) => {
    setSavePlayedSong(e.target.checked)
  }

  return (
    <Box className={classes.settings}>

      <Box className={classes.columnContainer}>
        <Box className={classes.formRow}>
          <Typography className={classes.label}>Name:</Typography>
          <TextField className={classes.grow} inputProps={{ className: classes.input }} onChange={changeName} value={userName} variant="outlined" />
        </Box>

        <Box className={classes.formRow}>
          <Typography className={classes.label}>Email:</Typography>
          <TextField className={classes.grow} inputProps={{ className: classes.input }} variant="outlined" value={email} disabled />
        </Box>
      </Box>

      <Box className={classes.btnContainer}>
        <AppButton disabled={isChanged} className={classes.btn} onClick={saveSettings}>Save changes</AppButton>
      </Box>

      <Divider />

      <Box className={classes.columnContainer}>
        <Box className={classes.formRow}>
          <Typography className={classes.label}>Remember last played song:</Typography>
          <Checkbox
            color="primary"
            className={classes.checkbox}
            checked={savePlayedSong}
            onChange={checkLastPlayedSong}
          />
        </Box>

        <Box className={classes.formRow}>
          <Typography className={classes.label}>Default volume:</Typography>
          <Input
            className={classes.grow}
            inputProps={{ className: classes.range }}
            value={defVolume}
            onChange={changeVolume}
            type="range"
            min={0}
            max={100}
            step={1}
            disableUnderline
          />
        </Box>

        <Box className={classes.formRow}>
          <Typography className={classes.label}>Default playlist:</Typography>
          <Select className={classes.grow} onChange={changePlaylist} value={defPlaylist} >
            {!!playlists?.length && playlists.map(playlist => <MenuItem key={playlist._id} value={playlist._id}>{playlist.name}</MenuItem>)}
          </Select>
        </Box>
      </Box>

      <Box className={classes.btnContainer}>
        <AppButton
          className={classes.btn}
          onClick={saveUserPlayerSettings}
          disabled={isDefault}
        >
          Save changes
        </AppButton>
        <AppButton
          className={classes.btn}
          onClick={() => setOpenModal(true)}
          disabled={isDefault}
        >
          Set to default
        </AppButton>
      </Box>

      <Divider />

      <ConfirmModal
        content="You sure you want reset settings?"
        action={setDefaultSettings}
        setOpen={setOpenModal}
        open={openModal}
      />

    </Box>
  )
}