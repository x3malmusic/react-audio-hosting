import React, { useState } from "react";
import { Box, TextField, Typography, Input, Select, MenuItem } from "@material-ui/core";
import AppButton from "../../components/AppButton/AppButton";
import ConfirmModal from "../../components/Modal/ConfirmModal";
import { isEqualArrays } from "../../utils";
import { DEFAULT_VOLUME, DEFAULT_PLAYLIST, DEFAULT_NAME } from "../../constants/default_settings";
import useStyles from "./styles";

const defaultsArray = [DEFAULT_VOLUME, "", DEFAULT_NAME]


export default function Settings({ saveUserSettings, email, name, defaultPlaylist, defaultVolume = DEFAULT_VOLUME, playlists }) {
  const classes = useStyles();

  const [userName, setUserName] = useState(name)
  const [defPlaylist, setDefPlaylist] = useState(defaultPlaylist || "")
  const [defVolume, setDefVolume] = useState(defaultVolume)
  const [openModal, setOpenModal] = useState(false)

  const userSettings = [defaultVolume, defaultPlaylist = "", name];
  const userLocalSettings = [defVolume, defPlaylist, userName];

  const [isChanged, setIsChanged] = useState(isEqualArrays(userSettings, userLocalSettings))
  const isDefault = isEqualArrays(userSettings, defaultsArray);

  const saveSettings = () => {
    saveUserSettings({ name: userName, defaultPlaylist: defPlaylist, defaultVolume: defVolume })
    setIsChanged(true)
  }

  const setDefaultSettings = () => {
    saveUserSettings({ name: "", defaultPlaylist: DEFAULT_PLAYLIST, defaultVolume: DEFAULT_VOLUME })
    setDefPlaylist("");
    setDefVolume(DEFAULT_VOLUME)
    setUserName(DEFAULT_NAME)
  }

  const changeVolume = (e) => {
    setDefVolume(Number(e.target.value))
    setIsChanged(Number(e.target.value) === defaultVolume)
  }

  const changePlaylist = (e) => {
    setDefPlaylist(e.target.value)
    setIsChanged(Boolean(e.target.value) === defaultPlaylist)
  }

  const changeName = (e) => {
    setUserName(e.target.value)
    setIsChanged(e.target.value === name)
  }

  return (
    <Box className={classes.settings}>

      <Box className={classes.formRow}>
        <Typography className={classes.label}>Name:</Typography>
        <TextField className={classes.grow} inputProps={{ className: classes.input }} onChange={changeName} value={userName} variant="outlined" />
      </Box>

      <Box className={classes.formRow}>
        <Typography className={classes.label}>Email:</Typography>
        <TextField className={classes.grow} inputProps={{ className: classes.input }} variant="outlined" value={email} disabled />
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

      <Box className={classes.formRow}>
        <AppButton disabled={isChanged} className={classes.btn} onClick={saveSettings}>Save changes</AppButton>
        <AppButton
          className={classes.btn}
          onClick={() => setOpenModal(true)}
          disabled={isDefault}
        >
          Set to default
        </AppButton>
      </Box>

      <ConfirmModal
        content="You sure you want reset settings?"
        action={setDefaultSettings}
        setOpen={setOpenModal}
        open={openModal}
      />

    </Box>
  )
}