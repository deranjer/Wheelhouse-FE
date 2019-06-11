import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from "@material-ui/pickers";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import API from '../../api';
import {
  Menu,
  MenuItem,
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


const NewProjectPage = (props) => {
  const [selectedDate, handleDateChange] = useState(new Date())

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} />
      {/* Search filter options here */}
      <Grid container justify='center'>
        {/* Main Page Content */}
      </Grid>
      <Grid container justify='center'>
        <Grid item xs={2} />
        {/* Left Side Padding */}
        <Grid item xs={2}>
          <Paper style={{ height: '400px' }}>
            <Typography component='p'>Project Name: </Typography>
            <Typography component='p'>Project Start Date: </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ height: '400px' }}>
            <Formik>
              <Form>
              <Typography component="p"><Field type="text" name="projectName" /></Typography>
              <DatePicker
                format="MMM DD, YYYY"  
                disablePast  
                value={selectedDate} 
                onChange={handleDateChange} 
              /> 
              </Form>
            </Formik>
          </Paper>
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

NewProjectPage.propTypes = {
  userID: PropTypes.string,
  //TODO: Add More PropTypes
};

export default NewProjectPage;
