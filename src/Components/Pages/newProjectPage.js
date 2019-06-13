import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { DatePicker } from "@material-ui/pickers";
import { Formik, Form, Field, ErrorMessage } from "formik";
import API from "../../api";
import {
  Menu,
  MenuItem,
  Avatar,
  Typography,
  Grid,
  AppBar,
  Toolbar,
  Paper,
  InputBase
} from "@material-ui/core";
import { IconButton, Button, Fab } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const NewProjectPage = props => {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={6} lg={2} xl={2}>
        <Paper style={{ height: "400px" }}>
          <Typography component="p">Project Name: </Typography>
          <Typography component="p">Project Start Date: </Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} lg={6} xl={6}>
        <Paper style={{ height: "400px" }}>
          <Formik>
            <Form>
              <Typography component="p">
                <Field type="text" name="projectName" />
              </Typography>
              <DatePicker
                format="MMM DD, YYYY"
                disablePast
                value={selectedDate}
                onChange={handleDateChange}
              />
            </Form>
          </Formik>
        </Paper>
      </Grid>
    </Grid>
  );
};

NewProjectPage.propTypes = {
  userID: PropTypes.string
  //TODO: Add More PropTypes
};

export default NewProjectPage;
