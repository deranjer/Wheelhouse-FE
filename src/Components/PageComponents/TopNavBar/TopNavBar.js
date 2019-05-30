import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Toolbar, AppBar, Grid, InputBase, Avatar} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';



const TopNavBar = () => {

    return (
    
        <AppBar position="static">
          <Toolbar>
            <Grid container justify="flex-end">
              <Button color="inherit">Browse Users</Button>
              <Button color="inherit">Profile</Button>
              <Button color="inherit">Browse Projects</Button>
              <SearchIcon />
              <InputBase placeholder="Search…" />
              <Button><Avatar>H</Avatar></Button>{/* TODO: Figure out how to make an avatar directly 'buttonable' */}
            </Grid>
          </Toolbar>
        </AppBar>
   
    );
}


    
export default TopNavBar;