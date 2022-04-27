import React, { useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@material-ui/core";
import { PlayerRefContext } from "../../context/PlayerContext";
import { isMiniPlayer } from "./isMiniPlayer";
import useStyles from "./styles";

export default function PlayerContainer() {
  const classes = useStyles();

  const { pathname } = useLocation()
  const playerContainerRef = useRef();
  const playerRef = useContext(PlayerRefContext)

  useEffect(() => {
    if (isMiniPlayer(pathname)) playerContainerRef.current.appendChild(playerRef.current)
  }, [playerRef, pathname])

  return(
    <Box ref={playerContainerRef} className={classes.playerContainer} />
  )
}