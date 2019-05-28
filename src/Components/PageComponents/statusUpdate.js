import React, { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import API from "../../api";
import {Menu, MenuItem,  Avatar, Typography, Grid, Divider, Chip} from "@material-ui/core";
import {Dialog, DialogActions, DialogTitle} from "@material-ui/core";
import {Card, CardContent, CardHeader, CardActions} from "@material-ui/core";
import {IconButton, Button} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';


const StatusUpdate = (props) => {
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
    <Grid item style={{ maxWidth: "600px"}}>
      <Card style={{ maxHeight: "600px"}}>
        <CardHeader
          title="deranjer"
          subheader="1 hour ago"
          avatar={<Avatar aria-label="Recipe">D</Avatar>}
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
        <CardContent>
          <Typography>
            This is a text status update.  We can either have a text limit or collapse the text and do a "see more" like Facebook.
            </Typography>
          
          <Divider variant="fullWidth" style={{ margin: "5px"}}/>
          <CardActions>
              <Button size="small" color="primary">
                  React
              </Button>
              <Button size="small" color="primary">
                  Comment
              </Button>
              <Button size="small" color="primary">
                  Reshare
              </Button>
          </CardActions>
        </CardContent> 
      </Card>
    </Grid>   
  );
}

StatusUpdate.propTypes = {
  userID: PropTypes.string
  //TODO: Add More PropTypes
}


export default StatusUpdate;