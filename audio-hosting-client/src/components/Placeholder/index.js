import React from "react";
import { Box, ListItem, Typography } from "@material-ui/core";
import { placeholderItems } from "./placeholderItems";
import useStyles from "./styles";

export default function Placeholder({ placeholder }) {
  const classes = useStyles();

  const renderIcon = (icon) => {
    const Icon = icon
    return  <Icon className={classes.icon} />
  }

  return(
    <Box className={classes.container}>
      <ListItem 
        className={classes.addPlaylist}
        onClick={placeholderItems[placeholder].action}
        button={placeholderItems[placeholder].isButton}
      >
        {renderIcon(placeholderItems[placeholder].icon)}
        
        <Typography className={classes.text}>
          {placeholderItems[placeholder].title}
        </Typography>
      </ListItem>
    </Box>
  )
}