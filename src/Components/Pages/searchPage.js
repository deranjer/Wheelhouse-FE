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
  InputBase
} from "@material-ui/core";
import {
  IconButton,
  Button,
  Fab,
  Input,
  NativeSelect,
  FormControl,
  FormHelperText
} from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

const SearchPage = props => {
  const [searchResults, setSearchResults] = useState(0);
  const [areFiltersPresent, setAreFiltersPresent] = useState(false);
  const [showEmpStatus, setShowEmpStatus] = useState(true);
  const [showProjStatus, setShowProjStatus] = useState(false);
  const [filterByVal, setFilterByVal] = useState("users");
  const [empStatusVal, setEmpStatusVal] = useState("lookingForWork");
  const [projPayVal, setProjPayVal] = useState("revShare");

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

  const filterByChange = e => {
    setFilterByVal(e.target.value);
    setShowEmpStatus(false);
    setShowProjStatus(false);

    switch (e.target.value) {
      case "users":
        setShowEmpStatus(true);
        setShowProjStatus(false);
        break;
      case "projects":
        setShowEmpStatus(false);
        setShowProjStatus(true);
        break;
      default:
        break;
    }
  };

  const projPayChange = e => {
    setProjPayVal(e.target.value);
  };

  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex"
    },
    formControl: {
      margin: theme.spacing(3)
    },
    group: {
      margin: theme.spacing(1, 0)
    }
  }));
  const classes = useStyles();

  return (
    <React.Fragment>
      <Drawer anchor="right" open={areFiltersPresent} onClose={toggleDrawer}>
        <div style={{ width: 270 }} role="presentation">
          <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Filter by</FormLabel>
              <RadioGroup
                aria-label="Filter by"
                name="firstLayer"
                className={classes.group}
                value={filterByVal}
                onChange={filterByChange}
              >
                <FormControlLabel
                  value="users"
                  control={<Radio />}
                  label="Users"
                />
                <FormControlLabel
                  value="projects"
                  control={<Radio />}
                  label="Projects"
                />
                <FormControlLabel
                  value="none"
                  control={<Radio />}
                  label="Both"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <Divider />
          {showEmpStatus ? (
            <>
              <div className={classes.root}>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">Employment Status</FormLabel>
                  <RadioGroup
                    aria-label="Employment Status"
                    name="employmentStatus"
                    value={empStatusVal}
                    onChange={empStatusChange}
                    className={classes.group}
                  >
                    <FormControlLabel
                      value="lookingForWork"
                      control={<Radio />}
                      label="Looking For Work"
                    />
                    <FormControlLabel
                      value="employed"
                      control={<Radio />}
                      label="Employed"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </>
          ) : null}
          {showProjStatus ? (
            <>
              <Divider />
              <div className={classes.root}>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">Project Payment</FormLabel>
                  <RadioGroup
                    aria-label="Project Payment"
                    name="firstLayer"
                    value={projPayVal}
                    onChange={projPayChange}
                    className={classes.group}
                  >
                    <FormControlLabel
                      value="revShare"
                      control={<Radio />}
                      label="Rev-Share"
                    />
                    <FormControlLabel
                      value="paid"
                      control={<Radio />}
                      label="Paid"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </>
          ) : null}
        </div>
      </Drawer>
      <Grid container justify="center">
        <Grid item xs={12} lg={8} xl={8}>
          <Button onClick={toggleDrawer}>
            <FilterListIcon />
          </Button>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={12} lg={8} xl={8}>
          <Paper style={{ height: "400px" }}>
            Search results would be put here
          </Paper>
        </Grid>
        {/* End Main Page Content */}
      </Grid>
    </React.Fragment>
  );
};

SearchPage.propTypes = {
  userID: PropTypes.string
  //TODO: Add More PropTypes
};

export default SearchPage;
