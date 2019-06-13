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
import { IconButton, Button } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UserPortfolioCard from "../UserComponents/UserPortfolioCard";
import ProjectSmallCard from "../ProjectComponents/ProjectSmallCard";

var imageOverLapStyle = {
  position: "absolute",
  top: "150px"
};

var profileImageStyle = {
  width: "300px",
  height: "300px",
  borderRadius: "50%"
};

var profileBGImageStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "25px"
};

const UserProfile = props => {
  const [userId, setUser] = useState(0);

  async function getUser() {
    try {
      const response = await API.get(`users/2`);
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

  return (
    <React.Fragment>
      <Grid container justify="center">
        <Grid item xs={12} lg={8} xl={8}>
          {/*  Header Image */}
          <img
            style={profileBGImageStyle}
            src="https://www.van-tramp.com/wp/wp-content/uploads/2013/07/IMG_5831.jpg"
          />
          <div style={imageOverLapStyle}>
            <img
              style={profileImageStyle}
              src="http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png"
            />
          </div>
        </Grid>
        <Grid container justify="center" alignContent="space-around">
          <Grid item xs={2} lg={2} xl={2}>
            <Grid container>
              <Typography variant="h4">{userId.username}</Typography>
              <Grid item>
                <IconButton style={{ float: "right" }}>
                  <MoreVertIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} lg={4} xl={4}>
            <Typography variant="h6">
              Here is my tagline that is under 240 that shows up on my
              profilecard
            </Typography>
          </Grid>
          <Grid item xs={4} lg={2} xl={2}>
            <Grid container justify="flex-end">
              <Button
                style={{ margin: "4px" }}
                variant="contained"
                color="primary"
              >
                Message
              </Button>
              <Button
                style={{ margin: "4px" }}
                variant="contained"
                color="primary"
              >
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
              I am an experienced user with Blender and Substance Painter. I
              have a one released game created with Unity. I also have a lot of
              experience with UE4 Blueprints, materials and Niagara System.
              Looking for a unique game to create.
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} lg={6} xl={6}>
          <Chip label="Substance Designerrr" style={{ margin: "4px" }} />
          {/*  20 char max for tags */}
          <Chip label="Substance Designerrr" style={{ margin: "4px" }} />
          <Chip label="Substance Designerrr" style={{ margin: "4px" }} />
          <Chip label="Substance Designerrr" style={{ margin: "4px" }} />
          <Chip label="Substance Designerrr" style={{ margin: "4px" }} />
          <Chip label="Substance Designerrr" style={{ margin: "4px" }} />
          <Chip label="Substance Designerrr" style={{ margin: "4px" }} />
          <Typography variant="h4" align="center">
            Portfolio
          </Typography>
          <Grid container spacing={1} justify="flex-start">
            <Grid item>
              <UserPortfolioCard />
            </Grid>
            <Grid item>
              <UserPortfolioCard />
            </Grid>
            <Grid item>
              <UserPortfolioCard />
            </Grid>
            <Grid item>
              <UserPortfolioCard />
            </Grid>
            <Grid item>
              <UserPortfolioCard />
            </Grid>
            <Grid item>
              <UserPortfolioCard />
            </Grid>
          </Grid>
          <Typography variant="h4" align="center">
            Projects
          </Typography>
          <Grid container spacing={1} justify="flex-start">
            <Grid item>
              <ProjectSmallCard />
            </Grid>
            <Grid item>
              <ProjectSmallCard />
            </Grid>
            <Grid item>
              <ProjectSmallCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default UserProfile;
