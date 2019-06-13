import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button, Toolbar, AppBar, Grid, Avatar, Badge } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Menu as DropMenu, MenuItem, Hidden } from '@material-ui/core';
import Chat from '@material-ui/icons/Chat';
import Menu from '@material-ui/icons/Menu';
// import SearchBar from '../searchBar';

const useStyles = makeStyles({
  maLink: {
    textDecoration: 'none',
    color: '#fff',
  },
});

const TopNavBar = props => {
  const [anchorEl, setAnchorEl] = useState(null); //Dropdown menu

  const openDropdown = useCallback(event => setAnchorEl(event.currentTarget), []); //Open the dropdown menu
  const closeDropdown = useCallback(() => setAnchorEl(null), []); //Close dropdown menu

  const classes = useStyles();

  return (
    <AppBar position="sticky" style={{ marginBottom: '1%' }}>
      <Toolbar>
        <Grid container>
          <Hidden xsDown>
            {Object.keys(props.navLinks).map(k => (
              <Button key={k}>
                <Link to={props.navLinks[k]} className={classes.maLink}>
                  {k}
                </Link>
              </Button>
            ))}
          </Hidden>
          <Hidden mdUp>
            <Button onClick={props.toggleDrawer} style={{ marginLeft: -24, color: '#fff' }}>
              <Menu />
            </Button>
          </Hidden>
          <Grid style={{ marginLeft: 'auto' }}>
            <Button style={{ borderRadius: 35, fontSize: '2em' }} onClick={props.toggleTheme}>
              {props.themeIcon}
            </Button>
            <Button style={{ borderRadius: 35, fontSize: '2em', color: 'white' }}>
              <Link to="/messagespage" className={classes.maLink}>
                <Chat />
              </Link>
            </Button>
            <Button style={{ borderRadius: 35, fontSize: '2em', color: 'white' }}>
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon style={{ fontSize: 30 }} />
              </Badge>
            </Button>
            <Button style={{ borderRadius: 35 }} onClick={openDropdown}>
              <Avatar>H</Avatar>
            </Button>
          </Grid>
          {/* TODO: Figure out how to make an avatar directly 'buttonable' */}
          <DropMenu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeDropdown}>
            {' '}
            {/*  TODO: If logged in */}
            <MenuItem onClick={closeDropdown}>Profile</MenuItem>
            <MenuItem onClick={closeDropdown}>Messages</MenuItem>
            <MenuItem onClick={closeDropdown}>Contacts</MenuItem>
          </DropMenu>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
