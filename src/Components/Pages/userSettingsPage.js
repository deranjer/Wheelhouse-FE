import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import API from '../../api';
import {
  Menu,
  MenuItem,
  MenuList,
  Avatar,
  Typography,
  Grid,
  AppBar,
  Toolbar,
  Paper,
  InputBase,
} from '@material-ui/core';
import { IconButton, Button, Fab } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import TopNavBar from '../PageComponents/TopNavBar/TopNavBar';
import ProfileSettingsCard from '../UserComponents/profileSettingsCard';

const UserSettingsPage = props => {
  const [userId, setUser] = useState(0);
  const [card, setCard] = useState('Profile');

  const temp = 1; //TODO remove this and switch to using userId

  async function getUser() {
    try {
      const response = await API.get(`users/2`);
      console.log(response);
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  const openProfile = useCallback(() => setCard('Profile'), []); //Open the dropdown menu
  const openProjects = useCallback(() => setCard('Projects'), []); //Close dropdown menu
  const openContacts = useCallback(() => setCard('Contacts'), []); //open dialog box

  const showCard = () => {
    //  Function to switch between settings page "tabs"
    switch (card) {
      case 'Profile':
        return <ProfileSettingsCard userID={temp} />; // TODO Create seperate components for each of these and switch to userId
      case 'Projects':
        return <ProfileSettingsCard userID={temp} />;
      case 'Contacts':
        return <ProfileSettingsCard userID={temp} />;
      default:
        return <ProfileSettingsCard userID={temp} />;
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} />
      {/* padding between top bar and content */}
      <Grid container justify="center">
        {/* Main Page Content */}
      </Grid>
      <Grid container justify="center">
        <Grid item xs={2} />
        {/* Left Side Padding */}
        <Grid item xs={1}>
          {/* Left Menu */}
          <MenuList>
            <MenuItem onClick={openProfile}> Profile </MenuItem>
            <MenuItem onClick={openProjects}> Projects </MenuItem>
            <MenuItem onClick={openContacts}> Contacts </MenuItem>
          </MenuList>
        </Grid>
        <Grid item xs={7}>
          {showCard()}
        </Grid>
        <Grid item xs={2} />
        {/* Right Side Padding */}
      </Grid>
      <Grid item xs={12}>
        <Paper style={{ height: '100px' }}>This is your footer area</Paper>
      </Grid>
      {/* Footer */}
      {/* End Main Page Content */}
    </Grid>
  );
};

UserSettingsPage.propTypes = {
  userID: PropTypes.string,
  //TODO: Add More PropTypes
};

export default UserSettingsPage;
