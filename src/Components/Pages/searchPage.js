import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import API from '../../api';
import {Menu, MenuItem,  Avatar, Typography, Grid, AppBar, Toolbar, Paper, InputBase} from "@material-ui/core";
import {IconButton, Button, Fab, Input, NativeSelect, FormControl, FormHelperText} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import FilterListIcon from '@material-ui/icons/FilterList';
import TopNavBar from '../PageComponents/TopNavBar/TopNavBar';
import FilterResults from '../PageComponents/FilterResults';


const SearchPage = (props) => {
  const [searchResults, setSearchResults] = useState(0);

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

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
      </Grid>{/* Left Side Padding */}
      <Grid item xs={8}>
        <FilterListIcon />
        <FilterResults />
      </Grid>  
      <Grid item xs={2}></Grid>{/* Left Side Padding */}
      <Grid container justify="center">{/* Main Page Content */}
        </Grid>
      <Grid container justify="center">
        <Grid item xs={2}></Grid>{/* Left Side Padding */}
        <Grid item xs={8}>
            <Paper style={{height: "400px"}}>Search results would be put here</Paper>  
        </Grid>
        <Grid item xs={2} />
        {/* Right Side Padding */}
      </Grid>
      <Grid item xs={12}>
        <Paper style={{ height: '100px' }}>This is your footer area</Paper>
      </Grid>
      {/* Footer */}
      {/* End Main Page Content */}
    </Grid>
  );
};

SearchPage.propTypes = {
  userID: PropTypes.string,
  //TODO: Add More PropTypes
};

export default SearchPage;
