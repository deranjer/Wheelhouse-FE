import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Button, Toolbar, AppBar, Grid, InputBase, Avatar, Badge} from '@material-ui/core';
import {Menu, MenuItem } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';



const TopNavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null); //Dropdown menu


  const openDropdown = useCallback((event) => setAnchorEl(event.currentTarget), []); //Open the dropdown menu
  const closeDropdown = useCallback(() => setAnchorEl(null), []); //Close dropdown menu

  return (
  
      <AppBar position="static">
        <Toolbar>
          <Grid container justify="flex-end" alignContent="center">
            <Button color="inherit">Browse Users</Button>
            <Button color="inherit">Browse Projects</Button>
            <p>
              <SearchIcon style={{ fontSize: 30}} />
            </p>
            <InputBase placeholder="Search…" />
            <p>
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon style={{ fontSize: 30 }} />
              </Badge>
            </p>
            <Button style={{borderRadius: 35}} onClick={openDropdown}>
              <Avatar>H</Avatar>
            </Button>{/* TODO: Figure out how to make an avatar directly 'buttonable' */}
            <Menu                       
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={closeDropdown}
              > {/*  TODO: If logged in */}
                <MenuItem onClick={closeDropdown}>Profile</MenuItem>
                <MenuItem onClick={closeDropdown}>Messages</MenuItem>
                <MenuItem onClick={closeDropdown}>Following</MenuItem>
              </Menu>
          </Grid>
        </Toolbar>
      </AppBar>
  
  );
}


    
export default TopNavBar;