import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import API from '../../api';
import {Menu, MenuItem,  Avatar, Typography, Grid, AppBar, Toolbar, Paper, InputBase} from "@material-ui/core";
import {IconButton, Button, Fab} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import TopNavBar from '../PageComponents/TopNavBar/TopNavBar';


const NewProjectPage = (props) => {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>{/*  Top Menu Bar */}
        <TopNavBar />
        
      </Grid>{/* End Top Menu Bar */}
      <Grid item xs={12}>
      </Grid>{/* Search filter options here */}
      <Grid container justify="center">{/* Main Page Content */}
      </Grid>
      <Grid container justify="center">
        <Grid item xs={2}></Grid>{/* Left Side Padding */}
        <Grid item xs={2}>
          <Paper style={{height: "400px"}}>
            <Typography component="p">Project Name: </Typography>
            <Typography component="p">Project Start Date: </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{height: "400px"}}>   
            <Formik
            
            >
              <Form>
              <Typography component="p"><Field type="text" name="projectName" /></Typography>
              <Typography component="p"> <Field type="date" name="projectStartDate" /> </Typography> 
              </Form>
            </Formik> 
          </Paper> 
        </Grid>
        <Grid item xs={2}></Grid>{/* Right Side Padding */}
      </Grid>
      <Grid item xs={12}><Paper style={{height: "100px"}}>This is your footer area</Paper></Grid>{/* Footer */}{/* End Main Page Content */}
    </Grid>   
  );
}

NewProjectPage.propTypes = {
  userID: PropTypes.string
  //TODO: Add More PropTypes
}
  
export default NewProjectPage