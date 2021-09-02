import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";
import useStyles from "./styles";

export default function Sidebar() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="left"
      classes={{ paper: classes.drawer }}
      open
    >
      <List className={classes.links}>
        {routes.map(({ Icon, name, path }) => (
          <NavLink exact to={path} activeClassName={classes.activeLink} className={classes.link} key={path}>
            <ListItem button>
              <Icon className={classes.icon} />
              <ListItemText primary={name} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Drawer>
  )
}