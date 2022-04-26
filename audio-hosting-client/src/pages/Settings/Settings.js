import React, { useState, useMemo } from "react";
import { Box, TextField, Typography, Input, Divider, Checkbox } from "@material-ui/core";
import AppButton from "../../components/AppButton/AppButton";
import ConfirmModal from "../../components/Modal/ConfirmModal";
import { DEFAULT_VOLUME, DEFAULT_REMEMBER_LAST_SONG } from "../../constants/default_settings";
import useStyles from "./styles";


export default function Settings({ rememberLastSong, savePlayerSettings, saveUserSettings, email, name, defaultVolume }) {
  const classes = useStyles();

  const [userName, setUserName] = useState(name)
  const [volume, setVolume] = useState(defaultVolume)
  const [savePlayedSong, setSavePlayedSong] = useState(rememberLastSong)
  const [openModal, setOpenModal] = useState(false)

  const [nameIsChanged, setNameIsChanged] = useState(name === userName)

  const isDefault = useMemo(
    () => volume === DEFAULT_VOLUME && savePlayedSong === DEFAULT_REMEMBER_LAST_SONG,
    [savePlayedSong, volume]
  );

  const playerSettingsChanged = useMemo(
    () => volume === defaultVolume && savePlayedSong === rememberLastSong, 
    [volume, savePlayedSong, defaultVolume, rememberLastSong]
  );

  const saveSettings = () => {
    saveUserSettings({ name: userName })
    setNameIsChanged(true)
  }

  const saveUserPlayerSettings = () => {
    savePlayerSettings({ defaultVolume: volume, rememberLastSong: savePlayedSong })
  }

  const resetToDefaultSettings = () => {
    savePlayerSettings({ rememberLastSong: DEFAULT_REMEMBER_LAST_SONG, defaultVolume: DEFAULT_VOLUME })
    setVolume(DEFAULT_VOLUME)
    setSavePlayedSong(DEFAULT_REMEMBER_LAST_SONG)
  }

  const changeVolume = (e) => {
    setVolume(e.target.value)
  }

  const changeName = (e) => {
    setUserName(e.target.value)
    setNameIsChanged(e.target.value === name)
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
        <AppButton disabled={nameIsChanged} className={classes.btn} onClick={saveSettings}>Save changes</AppButton>
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
            value={volume}
            onChange={changeVolume}
            type="range"
            min={0}
            max={100}
            step={1}
            disableUnderline
          />
        </Box>
      </Box>

      <Box className={classes.btnContainer}>
        <AppButton
          className={classes.btn}
          onClick={saveUserPlayerSettings}
          disabled={playerSettingsChanged}
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
        action={resetToDefaultSettings}
        setOpen={setOpenModal}
        open={openModal}
      />

    </Box>
  )
}