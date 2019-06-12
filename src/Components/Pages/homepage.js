import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import API from "../../api";
import { Menu, MenuItem, Typography, Grid, Paper } from "@material-ui/core";
import { IconButton, Button, Fab } from "@material-ui/core";
import ProjectSmallCard from "../ProjectComponents/ProjectSmallCard";

const HomePage = props => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {/*  Top Menu Bar */}
        {/* <TopNavBar changeTheme={props.changeTheme} themeIcon={props.themeIcon} /> */}
        {/* shouldn't be here! because we'd have to put in every page. moved to App.js like the "bottom" one */}
      </Grid>
      {/* End Top Menu Bar */}
      {/* Separation between top nav bar and main text */}
      <Grid item xs={12} />
      <Grid container justify="center">
        {/* Main Page Content */}
        <Grid item xs={2} />
        {/* Left Side Padding, could just float the text right and perhaps get the same effect */}
        <Grid item xs={5}>
          <Typography variant="h3">Welcome to Wheelhouse</Typography>
        </Grid>
        <Grid item xs={5}>
          <Button variant="contained" color="primary">JOIN!</Button>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={2} />
        {/* Left Side Padding, could just float the text right and perhaps get the same effect */}
        <Grid item xs={8}>
          <Typography variant="h6">
            A team building community for developers and designers
          </Typography>
        </Grid>
        <Grid item xs={2} />
        {/* Right Side Padding */}
      </Grid>
      <Grid container justify="center">
        <Grid item xs={2} />
        {/* Left Side Padding */}
        <Grid item xs={8}>
          <Paper>
            <Grid container>
              <ProjectSmallCard />
              <ProjectSmallCard />
              <ProjectSmallCard />
              <ProjectSmallCard />
              <ProjectSmallCard />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={2} />
        {/* Right Side Padding */}
      </Grid>
      {/* Footer */}
      <Grid item xs={12} />
      {/* End Main Page Content */}
    </Grid>
  );
};

HomePage.propTypes = {
  userID: PropTypes.string
  //TODO: Add More PropTypes
};

export default HomePage;
