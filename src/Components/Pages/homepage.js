import React, { useState, useEffect } from 'react';
import PropTyes from 'prop-types';
import API from '../../api';
import {Menu, MenuItem,  Avatar, Typography, Grid, AppBar, Toolbar, Paper, InputBase} from "@material-ui/core";
import {IconButton, Button, Fab} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';




var profileImageStyle = {
  width: '300px',
  height: '300px',
  borderRadius: '50%'
}



const HomePage = (props) => {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>{/*  Top Menu Bar */}
        <AppBar position="static">
          <Toolbar>
            <Grid container justify="flex-end">
              <Button color="inherit">Browse Users</Button>
              <Button color="inherit">Profile</Button>
              <Button color="inherit">Browse Projects</Button>
              <SearchIcon />
              <InputBase placeholder="Search…" />
              <Button><Avatar>H</Avatar></Button>{/* TODO: Figure out how to make an avatar directly 'buttonable' */}
            </Grid>
          </Toolbar>
        </AppBar>
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
  
export default HomePage