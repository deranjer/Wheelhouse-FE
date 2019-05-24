import React, { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import API from "../../api";
import {Menu, MenuItem,  Avatar, Typography, Grid, Divider, Chip} from "@material-ui/core";
import {Dialog, DialogActions, DialogTitle} from "@material-ui/core";
import {Card, CardContent, CardHeader} from "@material-ui/core";
import {IconButton, Button} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';


const DropDownMenu = (props) => {
  const [anchorEl, setAnchorEl] = useState(null); //Dropdown menu
  const [blockConfirm, setBlockConfirm] = useState(false) //Block User Dialog

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
    <React.Fragment>
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
  );
}

DropDownMenu.propTypes = {
  userID: PropTypes.string
  //TODO: Add More PropTypes
}


export default DropDownMenu;