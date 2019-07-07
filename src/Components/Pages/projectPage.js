import React, { useState, useEffect } from "react";
import PropTyes from "prop-types";
import API from "../../api";
import {
  Menu,
  MenuItem,
  Avatar,
  Typography,
  Grid,
  Divider,
  Chip,
  Paper,
  Card,
  CardContent,
  CardDescription
} from "@material-ui/core";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { IconButton, Button } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UserProfileSmallCard from "../UserComponents/UserProfileSmallCard";
import ProjectInfoCard from "../ProjectComponents/ProjectInfoCard";
import OpenPositionCard from "../ProjectComponents/OpenPositionCard";
import UserProjectPositionCard from "../UserComponents/UserProjectPositionCard";
import StatusUpdate from "../PageComponents/statusUpdate";

var profileBGImageStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "25px"
};

const ProjectProfile = props => {
  const [userID, setUser] = useState(0);
  const [tabValue, setTabValue] = useState(0); //Default to Project Update Tab

  async function getUser() {
    try {
      const response = await API.get(`users/1`);
      console.log(response);
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  function handleTabSwitch(event, tabValue) {
    setTabValue(tabValue);
  }

  return (
    <React.Fragment>
      <Grid container justify="center">
        <Grid item xs={12} lg={8} xl={8}>
          {/*  Header Image */}
          <img
            alt="header"
            style={profileBGImageStyle}
            src="https://www.van-tramp.com/wp/wp-content/uploads/2013/07/IMG_5831.jpg"
          />
        </Grid>

        <Grid container justify="center" alignContent="space-around">
          <Grid item xs={2} lg={2} xl={2}>
            <Grid container>
              <Typography variant="h4">Project Name</Typography>
              <Grid item>
                <IconButton style={{ float: "right" }}>
                  <MoreVertIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} lg={4} xl={4}>
            <Typography variant="h6">
              Here is my tagline that is under 240 that shows up on my smallcard
            </Typography>
          </Grid>
          <Grid item xs={4} lg={2} xl={2}>
            <Grid container justify="flex-end">
              <Button
                style={{ margin: "4px" }}
                variant="contained"
                color="primary">
                Message
              </Button>
              <Button
                style={{ margin: "4px" }}
                variant="contained"
                color="primary">
                Follow
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1}>
        <Grid item xs={6} lg={2} xl={2}>
          <Card>
            <CardContent>
              Tower Sprint is a 4 person race to the bottom game with a low-poly
              fun aesthetic. 4 people start at the top of a procedurally
              generated tower and must race to get to the bottom of the tower.
              There are a variety of randomly placed tools to assist the player
              as well as slow down other players. Some examples include traps to
              disable players, rope ladders to speed descent on the outside of
              the tower, melee weapons, armor, and sledgehammers (for breaking
              through blockades).
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          {/*  Main Page Content */}
          <Grid container justify="flex-start">
            <Chip label="Racing Game........." style={{ margin: "4px" }} />
            {/*  20 char max for tags, 5 max tags for projects */}
            <Chip label="Fighting Game......." style={{ margin: "4px" }} />
            <Chip label="Multiplayer........." style={{ margin: "4px" }} />
            <Chip label="Puzzle Game........." style={{ margin: "4px" }} />
            <Chip label="Substance Designerrr" style={{ margin: "4px" }} />
          </Grid>
          <AppBar position="static">
            <Tabs value={tabValue} onChange={handleTabSwitch}>
              <Tab label="Project Information" />
              <Tab label="Team Members" />
              <Tab label="Project Updates" />
              <Tab label="Positions Available" />
            </Tabs>
          </AppBar>
          {tabValue === 3 && (
            <Grid container justify="flex-start" spacing={2}>
              <Grid item>
                <OpenPositionCard />
              </Grid>
              <Grid item>
                <OpenPositionCard />
              </Grid>
              <Grid item>
                <OpenPositionCard />
              </Grid>
              <Grid item>
                <OpenPositionCard />
              </Grid>
              <Grid item>
                <OpenPositionCard />
              </Grid>
              <Grid item>
                <OpenPositionCard />
              </Grid>
            </Grid>
          )}
          {tabValue === 2 && (
            <Grid
              container
              justify="center"
              spacing={2}
              style={{ maxWidth: "700px" }}>
              <Grid item>
                <StatusUpdate />
              </Grid>
              <Grid item>
                <StatusUpdate />
              </Grid>
              <Grid item>
                <StatusUpdate />
              </Grid>
              <Grid item>
                <StatusUpdate />
              </Grid>
              <Grid item>
                <StatusUpdate />
              </Grid>
              <Grid item>
                <StatusUpdate />
              </Grid>
            </Grid>
          )}
          {tabValue === 1 && (
            <Grid container justify="flex-start" spacing={2}>
              <Grid item>
                <UserProjectPositionCard />
              </Grid>
              <Grid item>
                <UserProjectPositionCard />
              </Grid>
              <Grid item>
                <UserProjectPositionCard />
              </Grid>
              <Grid item>
                <UserProjectPositionCard />
              </Grid>
              <Grid item>
                <UserProjectPositionCard />
              </Grid>
              <Grid item>
                <UserProjectPositionCard />
              </Grid>
            </Grid>
          )}
          {tabValue === 0 && (
            <Grid item style={{ maxWidth: "800px", maxHeight: "1200px" }}>
              <ProjectInfoCard />
            </Grid>
          )}

          <Grid container justify="flex-start" spacing={4}>
            <Grid item />
            <Grid item />
            <Grid item />
            <Grid item />
            <Grid item />
            <Grid item />
          </Grid>
          <Grid container justify="flex-start" spacing={4} />
          {/* End Main Page Content */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ProjectProfile;
