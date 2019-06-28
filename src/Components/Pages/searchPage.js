import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
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
  InputBase,
  IconButton,
  Button,
  Fab,
  Input,
  NativeSelect,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import FilterListIcon from "@material-ui/icons/FilterList";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

import MyRadioGroup from "../PageComponents/myRadioGroup";

const SearchPage = props => {
  const [searchResults, setSearchResults] = useState(0);
  const [areFiltersPresent, setAreFiltersPresent] = useState(false);
  const [showEmpStatus, setShowEmpStatus] = useState(true);
  const [showProjStatus, setShowProjStatus] = useState(false);
  const [showProjPayRateStatus, setShowProjPayRateStatus] = useState(false);
  const [filterByVal, setFilterByVal] = useState("users");
  const [empStatusVal, setEmpStatusVal] = useState("lookingForWork");
  const [projPayVal, setProjPayVal] = useState("revShare");
  const [userHourlyRateVal, setUserHourlyRateVal] = useState("userHourlyRate");
  const [projHourlyRateVal, setProjHourlyRateVal] = useState("projHourlyRate");

  async function getResults() {
    try {
      const response = await API.get(`searchresults/`); //TODO: a shit ton of work on filtering and queries to backend
      console.log(response);
      console.log(response.data);
      //setResults(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getResults();
  }, []);

  const toggleDrawer = useCallback(() => {
    setAreFiltersPresent(!areFiltersPresent);
  });

  const empStatusChange = e => {
    setEmpStatusVal(e.target.value);
  };

  const userHourlyRateChange = e => {
    setUserHourlyRateVal(e.target.value);
  };

  const projHourlyRateChange = e => {
    setProjHourlyRateVal(e.target.value);
  };

  const filterByChange = e => {
    setFilterByVal(e.target.value);
    setShowEmpStatus(false);
    setShowProjStatus(false);
    setShowProjPayRateStatus(false);

    switch (e.target.value) {
      case "users":
        setShowEmpStatus(true);
        break;
      case "projects":
        setShowProjStatus(true);
        setShowProjPayRateStatus(projPayVal === "paid");
        break;
      default:
        break;
    }
  };

  const projPayChange = e => {
    setProjPayVal(e.target.value);
    setShowProjPayRateStatus(e.target.value === "paid");
  };

  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
    },
    formControl: {
      margin: theme.spacing(3),
    },
    group: {
      margin: theme.spacing(1, 0),
    },
  }));
  const classes = useStyles();

  const itemsFirstLayer = [
    { value: "users", label: "Users" },
    { value: "projects", label: "Projects" },
    { value: "none", label: "Both" },
  ];

  const itemsEmploymentStatus = [
    { value: "lookingForWork", label: "Looking For Work" },
    { value: "employed", label: "Employed" },
  ];

  const itemsHourlyRate = [
    { value: "gte5", label: "$5 or more" },
    { value: "gte10", label: "$10 or more" },
    { value: "gte25", label: "$25 or more" },
    { value: "gte50", label: "$50 or more" },
  ];

  const itemsProjPayment = [
    { value: "revShare", label: "Rev-Share" },
    { value: "paid", label: "Paid" },
  ];

  return (
    <React.Fragment>
      <Drawer anchor="right" open={areFiltersPresent} onClose={toggleDrawer}>
        <div style={{ width: 270 }} role="presentation">
          <div className={classes.root}>
            <MyRadioGroup
              label="Filter by"
              name="firstLayer"
              value={filterByVal}
              valueChange={filterByChange}
              items={itemsFirstLayer}
            />
          </div>
          <Divider />
          {showEmpStatus ? (
            <>
              <MyRadioGroup
                label="Employment Status"
                name="employmentStatus"
                value={empStatusVal}
                valueChange={empStatusChange}
                items={itemsEmploymentStatus}
              />
              <Divider />
              <MyRadioGroup
                label="Hourly Rate"
                name="userHourlyRate"
                value={userHourlyRateVal}
                valueChange={userHourlyRateChange}
                items={itemsHourlyRate}
              />
            </>
          ) : null}
          {showProjStatus ? (
            <>
              <MyRadioGroup
                label="Project Payment"
                name="projPayment"
                value={projPayVal}
                valueChange={projPayChange}
                items={itemsProjPayment}
              />
            </>
          ) : null}
          {showProjPayRateStatus ? (
            <>
              <Divider />
              <MyRadioGroup
                label="Hourly Rate"
                name="projHourlyRate"
                value={projHourlyRateVal}
                valueChange={projHourlyRateChange}
                items={itemsHourlyRate}
              />
            </>
          ) : null}
        </div>
      </Drawer>
      <Grid container justify="center" direction="row">
        <Grid item xs={11} md={8} xl={6}>
          <Formik
            initialValues={{ searchTerm: "" }}
            onSubmit={(values, { setSubmitting }) => {
              // TODO:: replace with the actual api call...
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}>
            {({ isSubmitting }) => (
              <Form style={{ display: "flex" }}>
                <Field
                  name="searchTerm"
                  label="Search Term"
                  type="text"
                  component={TextField}
                  margin="normal"
                  required={true}
                  variant="outlined"
                  fullWidth
                />
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  disabled={isSubmitting}
                  style={{ margin: "16px 0 0 8px", height: "56px" }}
                  fullWidth>
                  Search
                </Button>
                <Button onClick={toggleDrawer} style={{ margin: "16px 0 0 8px", height: "56px" }}>
                  <FilterListIcon />
                </Button>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={11} md={8} xl={6}>
          <Paper style={{ height: "400px" }}>Search results would be put here</Paper>
        </Grid>
        {/* End Main Page Content */}
      </Grid>
    </React.Fragment>
  );
};

SearchPage.propTypes = {
  userID: PropTypes.string,
  //TODO: Add More PropTypes
};

export default SearchPage;
