import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { DatePicker } from "@material-ui/pickers";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Stepper, Stop, StepLabel } from "@material-ui/core";
import API from "../../api";
import {
  Menu,
  MenuItem,
  Avatar,
  Typography,
  Grid,
  Paper,
  InputBase
} from "@material-ui/core";
import { IconButton, Button, Fab } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const getSteps = () => {
  return ["Basic Project Info", "Milestones", "Positions and Team"];
};

const getStopContent = step => {
  switch (step) {
    case 0:
      return "Fill out basic Project Info";
    case 1:
      return "Dates and Milestones for Project";
    case 2:
      return "Position and Team";
    default:
      return "Error, unknown step";
  }
};

const NewProjectPage = props => {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const [form, setFormInfo] = React.useState({
    projectName: "",
    projectWebPage: "",
    projectPageTwo: "", //secondary web page user can add, maybe a trello or something
    projectTagLine: "", //240 char tagline
    projectBlurb: "", //1200 char?
    projectBackgroundImage: "" //image uploader
  });

  const isStepOptional = step => {
    return step === 1;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    const isStepOptional = step => {
      return step === 1;
    };

    const isStepSkipped = step => {
      return skipped.has(step);
    };

    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }

      setActiveStep(prevActiveStep => prevActiveStep + 1);
      setSkipped(newSkipped);
    };

    const handleBack = () => {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
      }
    };
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <React.Fragment>
      <Grid container justify="center">
        <Grid item xs={12} lg={8} xl={8} />
      </Grid>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} lg={8} xl={8}>
          <Paper style={{ height: "400px" }}>
            <Formik>
              <Form>
                <Typography component="p">
                  <Typography component="p">Project Name: </Typography>
                  <Field type="text" name="projectName" />
                </Typography>
                <Typography component="p">Project Start Date: </Typography>
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
    </React.Fragment>
  );
};

NewProjectPage.propTypes = {
  userID: PropTypes.string
  //TODO: Add More PropTypes
};

export default NewProjectPage;
