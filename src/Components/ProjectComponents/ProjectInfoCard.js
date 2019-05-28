import React, { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import API from "../../api";
import {Menu, MenuItem,  Avatar, Typography, Grid} from "@material-ui/core";
import {Dialog, DialogActions, DialogTitle} from "@material-ui/core";
import {Card, CardContent, CardHeader, CardMedia} from "@material-ui/core";
import {IconButton, Button} from "@material-ui/core";
import { Line } from 'rc-progress';


const ProjectSmallCard = (props) => {
  const [userId, setUserId] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null); //Dropdown menu
  const [blockConfirm, setBlockConfirm] = useState(false) //Block User Dialog
  
  useEffect(() => {
    API.get(`users/${`userID`}`).then(result => {
      //TODO: Pull user data from API
      console.log(result);
      console.log(result.data);
    });
  }, [userId]);

  const progressAmount = 50 //TODO: pull from backend

  
  return (
    <Card>          
        <CardContent>
            <Grid container justify="flex-start">
                <Grid item xs={6}>
                    <Typography variant="h6">Project Category</Typography>
                    <Typography variant="h6">Progress</Typography>
                    <Typography variant="h6">Open Positions</Typography>
                    
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6">Video Game</Typography> 
                    <Line percent="100" strokeWidth="5" strokeColor="#0b2c60" />
                    <Avatar aria-label="OpenSpots">4</Avatar>
                </Grid>
                
                
            </Grid>

            
        </CardContent> 
    </Card>  
  );
}

ProjectSmallCard.propTypes = {
  userID: PropTypes.string
  //TODO: Add More PropTypes
}


export default ProjectSmallCard;