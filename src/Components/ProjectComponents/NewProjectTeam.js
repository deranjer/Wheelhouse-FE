import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { DatePicker } from "@material-ui/pickers";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Typography,
  Grid,
  Paper,
  Input,
  InputLabel,
  InputAdornment,
  TextField
} from "@material-ui/core";
import { IconButton, Button, Fab } from "@material-ui/core";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import Add from "@material-ui/icons/Add";
import UserProjectPositionMiniCard from "../UserComponents/UserProjectPositionMiniCard";
import { setPropTypes } from "recompose";

const NewProjectTeam = props => {
  const [openPositions, setOpenPositions] = React.useState(false);
  const [newPosition, setNewPosition] = React.useState("");
  const [newUserID, setNewUserID] = React.useState("");
  const [positionCards, setPositionCards] = React.useState([{}]);

  const handleAddPositionOpen = () => {
    setOpenPositions(true);
  };

  const handleAddPositionClose = () => {
    setOpenPositions(false);
  };

  const handleAddPositionSubmit = () => {
    setPositionCards([
      ...positionCards,
      {
        userID: newUserID,
        position: newPosition
      }
    ]);
  };

  return (
    <Grid item xs={12} lg={8} xl={8}>
      <Paper style={{ textAlign: "center", height: "100%" }}>
        <Typography variant="h6">Add Positions</Typography>
        <br />
        <Fab color="primary" aria-label="Add" onClick={handleAddPositionOpen}>
          <Add />
        </Fab>
        <Dialog
          open={openPositions}
          onClose={handleAddPositionClose}
          aria-labelledby="add-pos-dialog"
        >
          <DialogTitle id="add-pos-dialog">Add Positions</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter a position on the team and search for a user to add
              (optional)
            </DialogContentText>
            <TextField
              id="positionName"
              label="Position"
              onChange={setNewPosition}
            />
            <TextField
              id="searchInput"
              label="Search for Users"
              onChange={setNewUserID}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                )
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAddPositionSubmit} color="primary">
              Save and Close
            </Button>
          </DialogActions>
        </Dialog>

        <br />
        {positionCards.map(
          index => (
            console.log("POS CARD", positionCards),
            (
              <UserProjectPositionMiniCard
                userID={index.userID}
                position={index.position}
              />
            )
          )
        )}
        <Formik>
          <Form />
        </Formik>
        <Button
          style={{
            float: "right"
          }}
          variant="contained"
          color="primary"
          onClick={props.finishStep}
        >
          Finish
        </Button>
        <Button
          style={{
            float: "right"
          }}
          variant="contained"
          color="primary"
          onClick={props.backStep}
        >
          Back
        </Button>
      </Paper>
    </Grid>
  );
};

NewProjectTeam.propTypes = {
  userID: PropTypes.string
  //TODO: Add More PropTypes
};

export default NewProjectTeam;
