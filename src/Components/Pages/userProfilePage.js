import React, { useState, useEffect } from 'react';
import PropTyes from 'prop-types';
import API from '../../api';
import {Menu, MenuItem,  Avatar, Typography, Grid, Divider, Chip, Paper, Card, CardContent, CardDescription} from "@material-ui/core";
import {IconButton, Button} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UserPortfolioCard from '../UserComponents/UserPortfolioCard';
import TopNavBar from '../PageComponents/TopNavBar/TopNavBar';

var imageOverLapStyle = {
  position: 'absolute',
  top: '150px',
}

var profileImageStyle = {
  width: '300px',
  height: '300px',
  borderRadius: '50%'
}

var profileBGImageStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '25px'
}

const UserProfile = (props) => {
  const [userID, setUser] = useState(0);


  useEffect(() => {
    API.get(`users/${userID}`).then(result => {
      console.log(result);
      console.log(result.data);
    });
  }, [userID]);


  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>{/*  Top Menu Bar */}
          <TopNavBar /> 
        </Grid>{/* End Top Menu Bar */}
        <Grid item xs={2}>{/*  Left Side Top Bar */}
          <Paper style={{height: '100%'}}>Left Side Top Bar</Paper>
        </Grid>
        <Grid item xs={8}>{/*  Header Image */}
          <img style={profileBGImageStyle} src='https://www.van-tramp.com/wp/wp-content/uploads/2013/07/IMG_5831.jpg'/>
          <div style={imageOverLapStyle}><img style={profileImageStyle} src='http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png'/></div>
        </Grid>
        <Grid item xs={2}>{/*  Right Side Top Bar */}
          <Paper style={{height: '100%'}}>Right Side Top Bar</Paper>
        </Grid>
        <Grid item xs={2}>{/*  Left Side Bottom Bar */}
          <Paper style={{height: '100%'}} >Left Side Bottom Bar</Paper>
        </Grid>
        <Grid item xs={2}>{/*  Left Menu/Column */}
          <Grid container spacing={1}>
            <Grid item>           
              <Typography  variant='h4'>Username</Typography>
            </Grid>
            <Grid item>
              <IconButton style={{float: 'right'}}>
                <MoreVertIcon />                    
              </IconButton>
            </Grid>
          </Grid> 
          <Card>
            <CardContent>I am an experienced user with Blender and Substance Painter.  I have a one released game created with Unity.  I also have a lot of experience with UE4 Blueprints, materials and Niagara System.  Looking for a unique game to create.</CardContent>
          </Card>
          <Typography variant='h4'>Messages</Typography>

        </Grid>
        <Grid item xs={6}>{/*  Main Page Content */}
          <Grid container justify="flex-end">
            <Button style={{ margin: "4px"}} variant="contained" color="primary">Message</Button>
            <Button style={{ margin: "4px"}} variant="contained" color="primary">Follow</Button>
          </Grid>
          <Grid container justify="flex-start">
            <Chip label="Substance Designerrr" style={{ margin: "4px"}}/>{/*  20 char max for tags */}
            <Chip label="Substance Designerrr" style={{ margin: "4px"}}/>
            <Chip label="Substance Designerrr" style={{ margin: "4px"}}/>
            <Chip label="Substance Designerrr" style={{ margin: "4px"}}/>
            <Chip label="Substance Designerrr" style={{ margin: "4px"}}/>
            <Chip label="Substance Designerrr" style={{ margin: "4px"}}/>
            <Chip label="Substance Designerrr" style={{ margin: "4px"}}/>
          </Grid>
          <Typography variant='h4' align="center">Portfolio</Typography>
          <Grid container justify="flex-start" spacing={4}>
            <Grid item >
              <UserPortfolioCard />
            </Grid>
            <Grid item >
              <UserPortfolioCard />
            </Grid>
            <Grid item >
              <UserPortfolioCard />
            </Grid>
            <Grid item >
                <UserPortfolioCard />
            </Grid>
            <Grid item >
                <UserPortfolioCard />
            </Grid>
            <Grid item >
                <UserPortfolioCard />
            </Grid>
          </Grid>
          <Typography variant='h4' align="center">Projects</Typography>
          <Grid container justify="flex-start" spacing={4}>
          </Grid>
        </Grid>{/* End Main Page Content */}
        
        <Grid item xs={2}>{/*  Right side Bottom bar */}
          <Paper style={{height: '100%'}}>Right side Bottom bar</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
  
export default UserProfile