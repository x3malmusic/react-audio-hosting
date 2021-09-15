import React, { useEffect, useState } from "react";
import { SelectableGroup } from 'react-selectable-fast'
import SongCard from "../../components/SongCard/SongCard";
import useStyles from "./styles";

export default function AllSongsList({ allSongs = [], setSelectedItems, selectableRef }) {
  const classes = useStyles();
  const [clickCtrl, setClickCtrl] = useState(false)

  const ctrlClickHandler = (e) => {
    if (e.code === "ControlLeft") setClickCtrl(true)
  }

  const ctrlUpClickHandler = (e) => {
    if (e.code === "ControlLeft") setClickCtrl(false)
  }

  const selectHandler = (items) => {
    if (items.length) {
      const selectedIds = items.reduce((acc, item) => {
        acc.push(item.props.song._id)
        return acc
      }, [])

      setSelectedItems(selectedIds)
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", ctrlClickHandler)
    document.addEventListener("keyup", ctrlUpClickHandler)
    return () => {
      document.removeEventListener("keydown", ctrlClickHandler)
      document.removeEventListener("keyup", ctrlUpClickHandler)
    }
  }, [])

  return (
    <SelectableGroup
      ref={selectableRef}
      className={classes.allSongs}
      enableDeselect
      onSelectionFinish={selectHandler}
      resetOnStart={!clickCtrl}
      allowCtrlClick
      ignoreList={[".selected"]}
      disabled={!clickCtrl}
    >
      {!!Object.values(allSongs).length && Object.values(allSongs).map(song => <SongCard key={song._id} draggable song={song} />)}
    </SelectableGroup>
  )
}