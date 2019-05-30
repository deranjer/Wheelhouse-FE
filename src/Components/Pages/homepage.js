import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import API from '../../api';
import {Menu, MenuItem, Typography, Grid, Paper} from "@material-ui/core";
import {IconButton, Button, Fab} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import TopNavBar from '../PageComponents/TopNavBar/TopNavBar';

const HomePage = (props) => {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>{/*  Top Menu Bar */}
        <TopNavBar />
      </Grid>{/* End Top Menu Bar */}
      <Grid item xs={12}><Paper style={{height: "100px"}}>Separation between top nav bar and main text</Paper></Grid>{/* Separation between top nav bar and main text */}
      <Grid container justify="center">{/* Main Page Content */}
        <Grid item xs={2}></Grid>{/* Left Side Padding, could just float the text right and perhaps get the same effect */}
        <Grid item xs={5}>
          <Typography variant="h3">Welcome to Wheelhouse</Typography>  
        </Grid>
        <Grid item xs={5}>
          <Button>JOIN!</Button>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={2}></Grid>{/* Left Side Padding, could just float the text right and perhaps get the same effect */}
        <Grid item xs={8}>
          <Typography variant="h6">A team building community for developers and designers</Typography>  
        </Grid>
        <Grid item xs={2}></Grid>{/* Right Side Padding */}
      </Grid>
      <Grid container justify="center">
        <Grid item xs={2}></Grid>{/* Left Side Padding */}
        <Grid item xs={8}>
            <Paper style={{height: "400px"}}>Project cards would be put here</Paper>  
        </Grid>
        <Grid item xs={2}></Grid>{/* Right Side Padding */}
      </Grid>
      <Grid item xs={12}><Paper style={{height: "100px"}}>This is your footer area</Paper></Grid>{/* Footer */}{/* End Main Page Content */}
    </Grid>   
  );
}

HomePage.propTypes = {
  userID: PropTypes.string
  //TODO: Add More PropTypes
}


export default HomePage