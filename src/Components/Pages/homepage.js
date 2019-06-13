import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import API from "../../api";
import { Menu, MenuItem, Typography, Grid, Paper } from "@material-ui/core";
import { IconButton, Button, Fab } from "@material-ui/core";
import ProjectSmallCard from "../ProjectComponents/ProjectSmallCard";

const HomePage = props => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} />
      <Grid container justify="center">
        {/* Main Page Content */}
        <Grid item xs={8} lg={4} xl={4}>
        <Typography variant="h3">Welcome to Wheelhouse</Typography>
        </Grid>
        <Grid item xs={4} lg={4} xl={4}>
          <Button variant="contained" color="primary">JOIN!</Button>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={12} lg={8} xl={8}>
          <Typography variant="h6">
            A team building community for developers and designers
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={12} lg={8} xl={8}>
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
