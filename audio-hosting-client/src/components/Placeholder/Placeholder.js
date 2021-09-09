import React from "react";
import { Box, ListItem, Typography } from "@material-ui/core";
import { placeholderItems } from "./index";
import useStyles from "./styles";

export default function Placeholder({ placeholder }) {
  const classes = useStyles();

  const renderIcon = (icon) => {
    const Icon = icon
    return  <Icon className={classes.icon} />
  }

  return(
    <Box className={classes.container}>
      <ListItem button className={classes.addPlaylist} onClick={placeholderItems[placeholder].action}>
        {renderIcon(placeholderItems[placeholder].icon)}
        <Typography className={classes.text}>{placeholderItems[placeholder].title}</Typography>
      </ListItem>
    </Box>
  )
}