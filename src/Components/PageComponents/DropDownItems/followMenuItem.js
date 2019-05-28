import React, { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import API from "../../api";
import {Menu, MenuItem, Typography} from "@material-ui/core";




const FollowMenuItem = (props) => {


  const followObject = useCallback((event) => {
    //TODO: Send FOLLOW data to API, or perhaps send it to CONTEXT then the main component will send? unsure of best way
    },
    [],
  );



  return (
    <MenuItem onClick={followObject}>Follow</MenuItem>
  )
}




FollowMenuItem.propTypes = {
    userID: PropTypes.string
    //TODO: Add More PropTypes
  }
  
  
  export default FollowMenuItem;

