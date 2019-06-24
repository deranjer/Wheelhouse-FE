import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { DatePicker } from "@material-ui/pickers";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Typography, Grid, Paper, InputBase } from "@material-ui/core";
import { IconButton, Button, Fab } from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";

const NewProjectBasicInfo = props => {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [backgroundImage, setBackgroundImage] = useState("");
  const [form, setFormInfo] = React.useState({
    projectName: "",
    projectWebPage: "",
    projectPageTwo: "", //secondary web page user can add, maybe a trello or something
    projectTagLine: "", //240 char tagline
    projectBlurb: "" //1200 char?
  });
  return (
    <Grid item xs={12} lg={8} xl={8}>
      <Paper style={{ textAlign: "center", height: "100%" }}>
        <Formik>
          <Form>
            <Typography>
              <Typography>Project Name: </Typography>
              <Field type="text" name="projectName" />
            </Typography>
            <Typography>Project Tagline (240 char): </Typography>
            <Field type="text" name="projectTagLine" />
            <Typography>Project Blurb (600 char): </Typography>
            <Field component="textarea" name="projectBlurb" />
            <Typography>Project Background Image: </Typography>
            <DropzoneArea
              acceptedFiles={["image/*"]}
              filesLimit={1}
              maxFileSize={3000000}
              onChange={setBackgroundImage}
            />
            <Typography>Project Start Date: </Typography>
            <DatePicker
              format="MMM DD, YYYY"
              disablePast
              value={selectedDate}
              onChange={handleDateChange}
            />

            <Typography>Project Web Page (optional): </Typography>
            <Field type="text" name="projectWebPage" />
            <Typography>Project Web Page 2 (optional):</Typography>
            <Field type="text" name="projectName" />
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
      </Paper>
    </Grid>
  );
};

NewProjectBasicInfo.propTypes = {
  userID: PropTypes.string
  //TODO: Add More PropTypes
};

export default NewProjectBasicInfo;
