import React, { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import {Menu, MenuItem,  Avatar, Typography, Grid} from "@material-ui/core";
import {Dialog, DialogActions, DialogTitle, Tooltip} from "@material-ui/core";
import {Card, CardContent, CardHeader, CardMedia} from "@material-ui/core";
import {IconButton, Button} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Line } from 'rc-progress';


const TestComp = (props) => {
  
  
  return (
    <Grid item style={{ maxWidth: "400px", maxHeight: "280px"}}>
        <Card style={{ height: "280px"}}>
            {/* <div style={{position: "absolute", backgroundImage: `url("/images/artstation-logo.png")`,  opacity: ".2", height: '280px', width: '400px'}} /> */}
            <CardHeader
            title="TowerSprint"
            subheader="Tower Sprint is a 4 person race game1111" //NOTE: 40 Char limit for subheader for project card
            avatar={<Avatar aria-label="Recipe">T</Avatar>}
            />
            <CardMedia
              style={{height: "150px", width: "100%"}}
              image="/images/GameBanner.jpg"
              title="ProjectName"
              >
            </CardMedia>
            <CardContent>
              <Grid container justify="flex-start">
                <Grid item xs={3}>
 
                    <Tooltip title="Test">
                    <Avatar aria-label="OpenSpots">4</Avatar>
                    </Tooltip>


                </Grid>
                <Grid item xs={5}>

                    <Typography variant="h6" align="center">Video Game</Typography> 

                </Grid>
                <Grid item xs={4} style={{float: "right"}}>

                    <Typography align="center">Progress</Typography>
                      <Line percent="100" strokeWidth="5" strokeColor="#0b2c60" />

                </Grid>
              </Grid>

              
            </CardContent> 
        </Card>
    </Grid>   
  );
}

TestComp.propTypes = {
  userID: PropTypes.string
  //TODO: Add More PropTypes
}


export default TestComp;