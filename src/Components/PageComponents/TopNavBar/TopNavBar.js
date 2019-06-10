import React, { useState, useCallback } from 'react';
import { Button, Toolbar, AppBar, Grid, InputBase, Avatar } from '@material-ui/core';
import { Menu, MenuItem } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const TopNavBar = props => {
  const [anchorEl, setAnchorEl] = useState(null); //Dropdown menu

  const openDropdown = useCallback(event => setAnchorEl(event.currentTarget), []); //Open the dropdown menu
  const closeDropdown = useCallback(() => setAnchorEl(null), []); //Close dropdown menu

  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid container justify='flex-end'>
          <Button color='inherit'>Browse Users</Button>
          <Button color='inherit'>Browse Projects</Button>
          <SearchIcon />
          <InputBase placeholder='Search…' />
          <Button style={{ borderRadius: 35, fontSize: '2em' }} onClick={props.changeTheme}>
            {props.themeIcon}
          </Button>
          <Button style={{ borderRadius: 35 }} onClick={openDropdown}>
            <Avatar>H</Avatar>
          </Button>
          {/* TODO: Figure out how to make an avatar directly 'buttonable' */}
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeDropdown}>
            {' '}
            {/*  TODO: If logged in */}
            <MenuItem onClick={closeDropdown}>Profile</MenuItem>
            <MenuItem onClick={closeDropdown}>Messages</MenuItem>
            <MenuItem onClick={closeDropdown}>Contacts</MenuItem>
          </Menu>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
