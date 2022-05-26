import React from 'react';
import {AppBar, Divider, IconButton, Toolbar, Typography} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from "react-router-dom"
import routeDictionary from "../../router/routeDictionary"

function AppHeader({setDrawerOpen}) {

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={setDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component={NavLink} to={routeDictionary.home} sx={{ flexGrow: 1 }}>
          Scrum Poker
        </Typography>
        <Divider />
      </Toolbar>
    </AppBar>
  )
}

export default AppHeader;
