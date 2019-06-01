import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import API from '../../api';
import {Menu, MenuItem,  MenuList, Avatar, Typography, Grid, AppBar, Toolbar, Paper, InputBase} from "@material-ui/core";
import {IconButton, Button, Fab} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import TopNavBar from '../PageComponents/TopNavBar/TopNavBar';
import ProfileSettingsCard from '../UserComponents/profileSettingsCard';


const MessagesPage = (props) => {
  const [userId, setUserId] = useState(1);
  const [card, setCard] = useState('Profile')

  useEffect(() => {
    //API.get(`users/${`userID`}`).then(result => {
    API.get(`users/1`).then(result => {
      //TODO: Pull user data from API
      console.log(result);
      console.log(result.data);
    });
  }, [userId]);

  const openProfile = useCallback(() => setCard('Profile'), []); //Open the dropdown menu
  const openProjects = useCallback(() => setCard('Projects'), []); //Close dropdown menu
  const openContacts = useCallback(() => setCard("Contacts"), []); //open dialog box

  const showCard = () => {//  Function to switch between settings page "tabs" 
    switch(card) {
      case 'Profile':
        return <ProfileSettingsCard userID='1' /> 
      case 'Projects':
        return <ProfileSettingsCard userID='2' />
      case 'Contacts':
        return <ProfileSettingsCard userID='3' />
      default:
        return <ProfileSettingsCard userID='1' />
    }
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>{/*  Top Menu Bar */}
        <TopNavBar /> 
      </Grid>{/* End Top Menu Bar */}
      <Grid item xs={12}>
      </Grid>{/* padding between top bar and content */}
      <Grid container justify="center">{/* Main Page Content */}
        </Grid>
      <Grid container justify="center">
        <Grid item xs={2}></Grid>{/* Left Side Padding */}
        <Grid item xs={1}>{/* Left Menu */}
          <MenuList>
            <MenuItem onClick={openProfile}> Profile </MenuItem>
            <MenuItem onClick={openProjects}> Projects </MenuItem>
            <MenuItem onClick={openContacts}> Contacts </MenuItem>
          </MenuList>
        </Grid>
        <Grid item xs={7}>
          {showCard()}
        </Grid>
        <Grid item xs={2}></Grid>{/* Right Side Padding */}
      </Grid>
      <Grid item xs={12}><Paper style={{height: "100px"}}>This is your footer area</Paper></Grid>{/* Footer */}{/* End Main Page Content */}
    </Grid>   
  );
}

MessagesPage.propTypes = {
    userID: PropTypes.string
    //TODO: Add More PropTypes
  }
  
export default MessagesPage