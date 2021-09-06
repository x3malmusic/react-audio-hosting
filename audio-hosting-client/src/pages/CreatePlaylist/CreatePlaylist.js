import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Box } from "@material-ui/core";
import SongCard from "../../components/SongCard/SongCard";
import PlaylistItem from "../../components/PlaylistItem/PlaylistItem";
import { reorder } from "../../utils";
import useStyles from "./styles";

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  background: isDragging ? "#d9dfff" : "",
  ...draggableStyle
});

export default function CreatePlaylist({ songs = [] }) {
  const classes = useStyles();
  const [newSongs, setNewSongs] = useState([])

  const dropHandler = (e) => {
    e.preventDefault();
    const addedSong = JSON.parse(e.dataTransfer.getData("song"));
    const exist = newSongs.find(s => s._id === addedSong._id)

    if (exist) return
    setNewSongs(state => ([...state, addedSong]))
  }

  const dragOverHandler = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move"
  }

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = reorder(
      newSongs,
      result.source.index,
      result.destination.index
    );

    setNewSongs(items)
  }


  return (
    <Box className={classes.createPlaylistContainer}>
      <Box className={classes.allSongs}>
        {!!songs.length && songs.map(song => <SongCard key={song._id} song={song} />)}
      </Box>
      <Box
        className={classes.newPlaylist}
        onDrop={dropHandler}
        onDragOver={dragOverHandler}
      >
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {!!newSongs.length && newSongs.map((song, index) => (
                  <Draggable key={song._id} draggableId={song._id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <PlaylistItem key={song._id} index={index} {...song} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Box>
    </Box>
  )
}