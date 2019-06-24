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
import Search from "@material-ui/icons/Search";

const NewProjectTeam = props => {
  return (
    <Grid item xs={12} lg={8} xl={8}>
      <Paper style={{ textAlign: "center", height: "100%" }}>
        <Typography variant="h4">Send out invites to team members</Typography>
        <br />
        <TextField
          id="searchInput"
          label="Search for Users"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            )
          }}
        />
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
