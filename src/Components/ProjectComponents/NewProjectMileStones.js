import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { DatePicker } from "@material-ui/pickers";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Typography, Grid, Paper, InputBase } from "@material-ui/core";
import { IconButton, Button, Fab } from "@material-ui/core";

const NewProjectMileStones = props => {
  const [alphaDate, setAlphaDate] = useState(new Date());
  const [betaDate, setBetaDate] = useState(new Date());
  const [releaseDate, setReleaseDate] = useState(new Date());

  return (
    <Grid item xs={12} lg={8} xl={8}>
      <Paper style={{ textAlign: "center", height: "100%" }}>
        <Formik>
          <Form>
            <Typography component="p">Project Alpha Date: </Typography>
            <DatePicker
              format="MMM DD, YYYY"
              disablePast
              value={alphaDate}
              onChange={setAlphaDate}
            />
            <Typography component="p">Project Beta Date: </Typography>
            <DatePicker
              format="MMM DD, YYYY"
              disablePast
              value={betaDate}
              onChange={setBetaDate}
            />
            <Typography component="p">Project Release Date: </Typography>
            <DatePicker
              format="MMM DD, YYYY"
              disablePast
              value={releaseDate}
              onChange={setReleaseDate}
            />
          </Form>
        </Formik>
        <Button
          style={{
            float: "right"
          }}
          variant="contained"
          color="primary"
          onClick={props.nextStep}
        >
          Next
        </Button>
        <Button
          style={{
            float: "right"
          }}
          variant="contained"
          color="secondary"
          onClick={props.skipStep}
        >
          Skip
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
