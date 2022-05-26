import React from 'react';
import {Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material"
import routesList from "../../router/routesList"
import {NavLink} from "react-router-dom"

function AppNav(props) {
  const { open, onClose } = props;

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <Box
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
      >
        <List>
          {routesList.map((route) => (
            <ListItem key={route.key} disablePadding>
              <ListItemButton component={NavLink} to={route.path}>
                <ListItemIcon>
                  {route.icon}
                </ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default AppNav;
