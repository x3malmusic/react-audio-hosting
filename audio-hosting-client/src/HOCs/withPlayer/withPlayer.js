import React, { useContext, useEffect, useRef } from "react";
import { Box } from "@material-ui/core";
import { PlayerRefContext } from "../../context/PlayerContext";
import useStyles from "./styles";

const withPlayer = (Component) => ({ ...props }) => {
  const classes = useStyles();
  const playerContainerRef = useRef();
  const playerRef = useContext(PlayerRefContext)

  useEffect(() => {
    playerContainerRef.current.appendChild(playerRef.current)
  }, [playerRef])

  return(
    <>
      <Component {...props} />
      <Box ref={playerContainerRef} className={classes.playerContainer} />
    </>
  )
}

export default withPlayer;