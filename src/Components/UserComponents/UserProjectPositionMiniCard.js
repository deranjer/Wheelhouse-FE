import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import API from "../../api";
import {
  Menu,
  MenuItem,
  Avatar,
  Typography,
  Grid,
  Divider,
  Tooltip
} from "@material-ui/core";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import { IconButton, Button } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const UserProjectPositionMiniCard = props => {
  const [userId, setUser] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null); //Dropdown menu
  const [blockConfirm, setBlockConfirm] = useState(false); //Block User Dialog

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

  const openDropdown = useCallback(
    event => setAnchorEl(event.currentTarget),
    []
  ); //Open the dropdown menu
  const closeDropdown = useCallback(() => setAnchorEl(null), []); //Close dropdown menu
  const blockConfirmOpen = useCallback(() => setBlockConfirm(true), []); //open dialog box

  const blockConfirmClose = useCallback(() => {
    setBlockConfirm(false); //Close Dialog
    setAnchorEl(null); //Close Dropdown
  }, []);

  const blockConfirmSend = useCallback(() => {
    setBlockConfirm(false); //Close Dialog
    setAnchorEl(null); //Close Dropdown
    //TODO: Send BLOCK data to API
  }, []);

  return (
    <Grid item style={{ maxWidth: "400px" }}>
      <Card style={{ maxHeight: "200px" }}>
        <CardHeader
          title="deranjer"
          subheader={props.position}
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
            </React.Fragment>
          }
        />
      </Card>
    </Grid>
  );
};

UserProjectPositionMiniCard.propTypes = {
  userID: PropTypes.string
  //TODO: Add More PropTypes
};

export default UserProjectPositionMiniCard;
