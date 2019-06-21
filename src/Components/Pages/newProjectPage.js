import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import API from "../../api";
import { Avatar, Typography, Grid, Paper } from "@material-ui/core";
import { IconButton, Button, Fab } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NewProjectBasicInfo from "../ProjectComponents/NewProjectBasicInfo";
import NewProjectMileStones from "../ProjectComponents/NewProjectMileStones";
import NewProjectTeam from "../ProjectComponents/NewProjectTeam";

const getSteps = () => {
  return ["Basic Project Info", "Milestones", "Positions and Team"];
};

const NewProjectPage = props => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const getStepContent = step => {
    switch (step) {
      case 0:
        return <NewProjectBasicInfo nextStep={handleNext} />;
      case 1:
        return (
          <NewProjectMileStones
            nextStep={handleNext}
            backStep={handleBack}
            skipStep={handleSkip}
          />
        );
      case 2:
        return (
          <NewProjectTeam finishStep={handleFinish} backStep={handleBack} />
        );

      default:
        return "Error, unknown step";
    }
  };

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

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleFinish = () => {
    console.log("Finished");
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <React.Fragment>
      <Grid container justify="center">
        <Grid item xs={12} lg={8} xl={8}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Grid>
      </Grid>
      <Grid container spacing={2} justify="center">
        {getStepContent(activeStep)}
      </Grid>
    </React.Fragment>
  );
};

NewProjectPage.propTypes = {
  userID: PropTypes.string
  //TODO: Add More PropTypes
};

export default NewProjectPage;
