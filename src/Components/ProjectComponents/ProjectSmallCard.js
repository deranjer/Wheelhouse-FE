import React, { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import API from "../../api";
import {Menu, MenuItem,  Avatar, Typography, Grid} from "@material-ui/core";
import {Dialog, DialogActions, DialogTitle, Tooltip} from "@material-ui/core";
import {Card, CardContent, CardHeader, CardMedia} from "@material-ui/core";
import {IconButton, Button} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Line } from 'rc-progress';


const ProjectSmallCard = (props) => {
  const [userId, setUser] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null); //Dropdown menu
  const [blockConfirm, setBlockConfirm] = useState(false) //Block User Dialog
  
  async function getUser() {
    try {
      const response = await API.get(`users/1`);
      console.log(response);
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);


  const progressAmount = 50 //TODO: pull from backend

  const openDropdown = useCallback((event) => setAnchorEl(event.currentTarget), []); //Open the dropdown menu
  const closeDropdown = useCallback(() => setAnchorEl(null), []); //Close dropdown menu
  const blockConfirmOpen = useCallback(() => setBlockConfirm(true), []); //open dialog box
  
  const blockConfirmClose = useCallback(() => {
    setBlockConfirm(false)  //Close Dialog
    setAnchorEl(null) //Close Dropdown
    },
    [], 
  ); 

  const blockConfirmSend = useCallback(() => {
    setBlockConfirm(false) //Close Dialog
    setAnchorEl(null) //Close Dropdown
    //TODO: Send BLOCK data to API
    },
    [],
  );
  
  return (
    <Grid item style={{ maxWidth: "400px", maxHeight: "280px"}}>
        <Card style={{ height: "280px"}}>
            {/* <div style={{position: "absolute", backgroundImage: `url("/images/artstation-logo.png")`,  opacity: ".2", height: '280px', width: '400px'}} /> */}
            <CardHeader
            title="TowerSprint"
            subheader="Tower Sprint is a 4 person race game1111" //NOTE: 40 Char limit for subheader for project card
            avatar={<Avatar aria-label="Recipe">T</Avatar>}
            action={
                <React.Fragment>
                <IconButton onClick={openDropdown}>
                    <MoreVertIcon />                    
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={closeDropdown}
                >
                    <MenuItem onClick={closeDropdown}>Follow</MenuItem>
                    <MenuItem onClick={closeDropdown}>Message</MenuItem>
                    <MenuItem onClick={blockConfirmOpen}>Block</MenuItem>
                </Menu>
                <Dialog
                    //fullScreen={fullScreen}
                    open={blockConfirm}
                    onClose={blockConfirmClose}
                    aria-labelledby="blockConfirm"
                >
                    <DialogTitle id="blockConfirm">{"Are you sure you want to block this user?"}</DialogTitle>
                    <DialogActions>
                    <Button onClick={blockConfirmSend} color="secondary">
                        Agree
                    </Button>
                    <Button onClick={blockConfirmClose} color="primary">
                        Cancel
                    </Button>
                    </DialogActions>
                </Dialog>
                </React.Fragment>
            }             
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
                  <Tooltip title="Open Positions">
                    <Avatar aria-label="OpenSpots">4</Avatar>
                  </Tooltip>
                </Grid>
                <Tooltip title="Project Category">
                  <Grid item xs={5}>
                    <Typography variant="h6" align="center">Video Game</Typography>    
                  </Grid>
                </Tooltip>
                <Tooltip title="Project Progress">
                  <Grid item xs={4} style={{float: "right"}}>
                      <Typography align="center">Progress</Typography>
                      <Line percent="100" strokeWidth="5" strokeColor="#0b2c60" />
                  </Grid>
                </Tooltip>
                
              </Grid>

              
            </CardContent> 
        </Card>
    </Grid>   
  );
}

ProjectSmallCard.propTypes = {
  userID: PropTypes.string
  //TODO: Add More PropTypes
}


export default ProjectSmallCard;