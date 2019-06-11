import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import API from '../../api';
import {Input, NativeSelect, FormControl, FormHelperText} from "@material-ui/core";



const FilterResults = (props) => {

  const [state, setState] = React.useState({
    filterbyType: 'none',
    advancedFilter: 'lookingFor',
    typeofFilter: 'all',
    sortby: 'popularity',
    currentResults: '',
    currentPage: '',
  })

  const handleStateChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

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
  }, [state.currentPage]);

  return (
    <React.Fragment>
      <FormControl style={{paddingRight: '20px'}}>
        <NativeSelect
          value={state.filterbyType}
          onChange={handleStateChange('filterbyType')}
          name="filterbyType"
        >
          <option value="none"></option>
          <option value="users">Users</option>
          <option value="projects">Projects</option>
        </NativeSelect>
        <FormHelperText>Filter by</FormHelperText>
      </FormControl>
      <FormControl style={{paddingRight: '20px'}}>
        <NativeSelect
          value={state.advancedFilter}
          onChange={handleStateChange('advancedFilter')}
          name="advancedFilter"
        >
          <option value="lookingFor">Looking For Work</option>
          <option value="users">Users</option>
          <option value="projects">Projects</option>
        </NativeSelect>
        <FormHelperText>Advanced Filter</FormHelperText>
      </FormControl>
      <FormControl style={{paddingRight: '20px'}}>
        <NativeSelect
          value={state.typeofFilter}
          onChange={handleStateChange('typeofFilter')}
          name="typeofFilter"
        >
          <option value="popularity">Video Game</option>
          <option value="ageNew">Application</option>
          <option value="ageOld">Other</option>
        </NativeSelect>
        <FormHelperText>Filter by Type</FormHelperText>
      </FormControl>
      <FormControl style={{paddingRight: '20px'}}>
        <NativeSelect
          value={state.sortby}
          onChange={handleStateChange('sortby')}
          name="sortby"
        >
          <option value="popularity">Popularity</option>
          <option value="ageNew">New</option>
          <option value="ageOld">Old</option>
        </NativeSelect>
        <FormHelperText>Sort By</FormHelperText>
      </FormControl>
    </React.Fragment>
  );
}

FilterResults.propTypes = {
  userID: PropTypes.string
  //TODO: Add More PropTypes
}
  
export default FilterResults