import React, { useState, useEffect } from 'react';
import PropTyes from 'prop-types';
import API from '../../api';
import {Menu, MenuItem,  Avatar, Typography, Grid, Divider, Chip, Paper} from "@material-ui/core";

var imageOverLapStyle = {
  position: 'absolute',
  top: '100px'
}

const UserProfile = (props) => {
  const [userID, setUser] = useState(0);


  useEffect(() => {
    API.get(`users/${userID}`).then(result => {
      console.log(result);
      console.log(result.data);
    });
  }, [userID]);


  return (
    <div style={{flexGrow: 1}}>
      <Grid container spacing={1}>
        <Grid item xs={2}>{/*  Right side bar */}
          <Paper >xs=2</Paper>
        </Grid>
        <Grid item xs={8}>{/*  Header Image */}
          <Paper >xs=8</Paper>
        </Grid>
        <Grid item xs={2}>{/*  Left side bar */}
          <Paper >xs=2</Paper>
        </Grid>
        <Grid item xs={2}>{/*  Right side bar */}
          <Paper >xs=2</Paper>
        </Grid>
        <Grid item xs={2}>{/*  Left Menu/Column */}
          <Paper >xs=2</Paper>
        </Grid>
        <Grid item xs={6}>{/*  Main Page Content */}
          <Paper >xs=6</Paper>
        </Grid>
        <Grid item xs={2}>{/*  Left side bar */}
          <Paper >xs=2</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
  
export default UserProfile