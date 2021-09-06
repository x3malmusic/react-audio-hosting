import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Box } from "@material-ui/core";
import PlaylistItem from "../PlaylistItem/PlaylistItem";
import { reorder, fn } from "../../utils";
import useStyles from "./styles";

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  background: isDragging ? "#d9dfff" : "",
  ...draggableStyle
});

export default function Playlist({ currentSong, setSongs = fn, songs = [], setPlaySong = fn }) {
  const classes = useStyles();

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = reorder(
      songs,
      result.source.index,
      result.destination.index
    );

    setSongs(items)
  }

  return (
    <Box className={classes.playlist}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {!!songs.length && songs.map((song, index) => (
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
                      <PlaylistItem
                        key={song._id}
                        currentSong={currentSong}
                        setSong={setPlaySong}
                        index={index} {...song}
                      />
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
  )
}