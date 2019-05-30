import React, { useState, useEffect } from 'react';
import PropTyes from 'prop-types';
import API from '../../api';
import {Menu, MenuItem,  Avatar, Typography, Grid, Divider, Chip, Paper, Card, CardContent, CardDescription} from "@material-ui/core";
import {AppBar, Tabs, Tab} from "@material-ui/core";
import {IconButton, Button} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UserProfileSmallCard from '../UserComponents/UserProfileSmallCard';
import ProjectInfoCard from '../ProjectComponents/ProjectInfoCard';
import OpenPositionCard from '../ProjectComponents/OpenPositionCard';
import UserProjectPositionCard from '../UserComponents/UserProjectPositionCard';
import StatusUpdate from '../PageComponents/statusUpdate';


var profileBGImageStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '25px'
}

const ProjectProfile = (props) => {
  const [userID, setUser] = useState(0);
  const [tabValue, setTabValue] = useState(0);//Default to Project Update Tab


  useEffect(() => {
    API.get(`users/${userID}`).then(result => {
      console.log(result);
      console.log(result.data);
    });
  }, [userID]);

  function handleTabSwitch(event, tabValue) {
    setTabValue(tabValue)
  }

  return (
    <div>
      <Grid container spacing={1 }>
        <Grid item xs={2}>{/*  Left Side Top Bar */}
          <Paper style={{height: '100%'}}>Left Side Top Bar</Paper>
        </Grid>
        <Grid item xs={8}>{/*  Header Image */}
          <img style={profileBGImageStyle} src='https://www.van-tramp.com/wp/wp-content/uploads/2013/07/IMG_5831.jpg'/>
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
              <Typography  variant='h4'>Project Name</Typography>
            </Grid>
            <Grid item>
              <IconButton style={{float: 'right'}}>
                <MoreVertIcon />                    
              </IconButton>
            </Grid>
          </Grid> 
          <Card>
            <CardContent>Tower Sprint is a 4 person race to the bottom game with a low-poly fun aesthetic.  4 people start at the top of a procedurally generated tower and must race to get to the bottom of the tower.  There are a variety of randomly placed tools to assist the player as well as slow down other players.  Some examples include traps to disable players, rope ladders to speed descent on the outside of the tower, melee weapons, armor, and sledgehammers (for breaking through blockades).
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>{/*  Main Page Content */}
          <Grid container justify="flex-end">
            <Button style={{ margin: "4px"}} variant="contained" color="primary">Message</Button>
            <Button style={{ margin: "4px"}} variant="contained" color="primary">Follow</Button>
          </Grid>
          <Grid container justify="flex-start">
            <Chip label="Racing Game........." style={{ margin: "4px"}}/>{/*  20 char max for tags, 5 max tags for projects */}
            <Chip label="Fighting Game......." style={{ margin: "4px"}}/>
            <Chip label="Multiplayer........." style={{ margin: "4px"}}/>
            <Chip label="Puzzle Game........." style={{ margin: "4px"}}/>
            <Chip label="Substance Designerrr" style={{ margin: "4px"}}/>
          </Grid>
          <AppBar position="static">
            <Tabs value={tabValue} onChange={handleTabSwitch}>
              <Tab label="Project Information" />
              <Tab label="Team Members" />
              <Tab label="Project Updates" />
              <Tab label="Positions Available" />
            </Tabs>
          </AppBar>
          {tabValue === 3 && 
            <Grid container justify="flex-start" spacing={2}>
              <Grid item >
                <OpenPositionCard />
              </Grid>
              <Grid item >
                <OpenPositionCard />
              </Grid>
              <Grid item >
                <OpenPositionCard />
              </Grid>
              <Grid item >
                <OpenPositionCard />
              </Grid>
              <Grid item >
                <OpenPositionCard />
              </Grid>
              <Grid item >
                <OpenPositionCard />
              </Grid>
            </Grid>
          }
          {tabValue === 2 && 
            <Grid container justify="center" spacing={2} style={{maxWidth: '700px'}}>
              <Grid item >
                <StatusUpdate />
              </Grid>
              <Grid item >
                <StatusUpdate />
              </Grid>
              <Grid item >
                <StatusUpdate />
              </Grid>
              <Grid item >
                <StatusUpdate />
              </Grid>
              <Grid item >
                <StatusUpdate />
              </Grid>
              <Grid item >
                <StatusUpdate />
              </Grid>
            </Grid>
          }
          {tabValue === 1 && 
            <Grid container justify="flex-start" spacing={2}>
              <Grid item >
                <UserProjectPositionCard />
              </Grid>
              <Grid item >
                <UserProjectPositionCard />
              </Grid>
              <Grid item >
                <UserProjectPositionCard />
              </Grid>
              <Grid item >
               <UserProjectPositionCard />
              </Grid>
              <Grid item >
              <UserProjectPositionCard />
              </Grid>
              <Grid item >
                <UserProjectPositionCard />
              </Grid>
            </Grid>
          }
          {tabValue === 0 && 
            <Grid item style={{ maxWidth: "800px", maxHeight: "1200px"}}>
              <ProjectInfoCard />

            </Grid>
          }
          
          <Grid container justify="flex-start" spacing={4}>
            <Grid item >

            </Grid>
            <Grid item >

            </Grid>
            <Grid item >

            </Grid>
            <Grid item >

            </Grid>
            <Grid item >

            </Grid>
            <Grid item >

            </Grid>
          </Grid>
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
  
export default ProjectProfile