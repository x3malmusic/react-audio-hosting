import { useRef, useState } from "react";

export default function useSelectable({ playlistSongs, setSongs }) {
  const selectableRef = useRef();
  const [selectedItems, setSelectedItems] = useState([])

  const dropHandler = (e) => {
    e.preventDefault();
    const addedSong = e.dataTransfer.getData("song");

    if (addedSong) {
      const newSongs = [...new Set([ ...playlistSongs, JSON.parse(addedSong) ])]
      return setSongs(newSongs)
    }

    const newSongs = [...new Set([ ...playlistSongs, ...selectedItems ])]
    setSongs(newSongs)
    selectableRef.current.clearSelection()
  }

  const dragOverHandler = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move"
  }

  const deleteSong = (id) => {
    const songs = playlistSongs.filter(song => song !== id)
    setSongs(songs)
  }

  return { selectedItems, setSelectedItems, dropHandler, dragOverHandler, deleteSong, selectableRef }
}