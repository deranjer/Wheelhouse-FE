import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';



  
  function ButtonAppBar() {

    return (
    
        <AppBar >
            <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="Menu">
                <MenuItem />
            <MenuIcon />  
                </IconButton>
                <Typography variant="h6" color="inherit">Projects</Typography> 
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
   
    );
  }
  
  export default ButtonAppBar;