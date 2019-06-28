import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button, Toolbar, AppBar, Grid, Avatar, Badge, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Menu as DropMenu, MenuItem, Hidden } from "@material-ui/core";
import Chat from "@material-ui/icons/Chat";
import Menu from "@material-ui/icons/Menu";
// import SearchBar from '../searchBar';

const useStyles = makeStyles({
  maLink: {
    textDecoration: "none",
    color: "#fff",
  },
});

const TopNavBar = props => {
  const [anchorUserEl, setAnchorUserEl] = useState(null); //Dropdown menu
  const [anchorNotifEl, setAnchorNotifEl] = useState(null); //Dropdown menu

  const openUserDropdown = useCallback(event => setAnchorUserEl(event.currentTarget), []); //Open the dropdown menu
  const closeUserDropdown = useCallback(() => setAnchorUserEl(null), []); //Close dropdown menu

  const openNotifDropdown = useCallback(event => setAnchorNotifEl(event.currentTarget), []); //Open the dropdown menu
  const closeNotifDropdown = useCallback(() => setAnchorNotifEl(null), []); //Close dropdown menu

  const classes = useStyles();

  return (
    <AppBar position="sticky" style={{ marginBottom: "1%", padding: "0" }}>
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
            <Button onClick={props.toggleDrawer} style={{ marginLeft: -24, color: "#fff" }}>
              <Menu />
            </Button>
          </Hidden>
          <Grid style={{ marginLeft: "auto" }}>
            <Button style={{ borderRadius: 35, fontSize: "2em" }} onClick={props.toggleTheme}>
              {props.themeIcon}
            </Button>
            <Button style={{ borderRadius: 35, fontSize: "2em", color: "white" }}>
              <Link to="/messagespage" className={classes.maLink}>
                <Chat />
              </Link>
            </Button>
            <Button
              style={{ borderRadius: 35, fontSize: "2em", color: "white" }}
              onClick={openNotifDropdown}>
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon style={{ fontSize: 30 }} />
              </Badge>
            </Button>
            <Button style={{ borderRadius: 35 }} onClick={openUserDropdown}>
              <Avatar>H</Avatar>
            </Button>
          </Grid>
          {/* TODO: Figure out how to make an avatar directly 'buttonable' */}
          <DropMenu
            id="menuUser"
            anchorEl={anchorUserEl}
            open={Boolean(anchorUserEl)}
            onClose={closeUserDropdown}>
            {" "}
            {/*  TODO: If logged in */}
            <MenuItem onClick={closeUserDropdown}>Profile</MenuItem>
            <MenuItem onClick={closeUserDropdown}>Messages</MenuItem>
            <MenuItem onClick={closeUserDropdown}>Contacts</MenuItem>
          </DropMenu>
          <DropMenu
            id="menuNotifications"
            anchorEl={anchorNotifEl}
            open={Boolean(anchorNotifEl)}
            onClose={closeNotifDropdown}>
            {" "}
            {props.notifications.map((n, i) => (
              <MenuItem key={n.id} onClick={closeNotifDropdown}>
                <div>
                  <Typography varient="h6">{n.title}</Typography>
                  <Typography varient="body2">{n.text}</Typography>
                </div>
              </MenuItem>
            ))}
          </DropMenu>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
