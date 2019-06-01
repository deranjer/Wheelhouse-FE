import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import API from '../../api';
import {Card, CardContent, Avatar, Typography, Paper, InputBase} from "@material-ui/core";
import {IconButton, Button, Fab} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import TopNavBar from '../PageComponents/TopNavBar/TopNavBar';


const ProfileSettingsCard = (props) => {
  return (
    <Card>
        <CardContent>
          <Typography varient="h6">UserID: {props.userID}</Typography>
          <Typography varient="h6">Full Name: {props.full_name}</Typography>
          <Typography varient="h6">UserName: {props.username}</Typography>
          <Typography varient="h6">Email: {props.email}</Typography>
          <Typography varient="h6">Update Password: TODO: Input field</Typography>
          <Typography varient="h6">Profile Photo URL: {props.profile_photo_url}</Typography>  
        </CardContent>
    </Card>
  );
}

ProfileSettingsCard.propTypes = {
    userID: PropTypes.string
    //TODO: Add More PropTypes
  }
  
export default ProfileSettingsCard