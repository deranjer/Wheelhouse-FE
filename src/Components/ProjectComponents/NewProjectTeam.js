import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { DatePicker } from "@material-ui/pickers";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Typography, Grid, Paper, InputBase } from "@material-ui/core";
import { IconButton, Button, Fab } from "@material-ui/core";

const NewProjectMileStones = props => {
  return (
    <Grid item xs={12} lg={8} xl={8}>
      <Paper style={{ textAlign: "center", height: "100%" }}>
        <Formik>
          <Form>
            <Typography variant="h4">
              Send out invites to team members
            </Typography>
          </Form>
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

NewProjectMileStones.propTypes = {
  userID: PropTypes.string
  //TODO: Add More PropTypes
};

export default NewProjectMileStones;
