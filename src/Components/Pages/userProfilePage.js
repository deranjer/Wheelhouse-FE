import React, { useState, useEffect, Fragment } from "react";
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
  CardDescription,
  Hidden
} from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { makeStyles } from "@material-ui/styles";
import { IconButton, Button } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UserPortfolioCard from "../UserComponents/UserPortfolioCard";
import ProjectSmallCard from "../ProjectComponents/ProjectSmallCard";

import getProfilePageClasses from "../../Styles/profilePageStyles";

const UserProfile = props => {
  const [user, setUser] = useState(0);

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

  const gotoContacts = () => {
    props.history.push("/users/1/contacts");
  };

  const classes = getProfilePageClasses(props.appTheme);

  return (
    <div className={classes.RootElClasses.root}>
      <Grid container justify="center">
        <Grid item xs={12} md={10} lg={8} container>
          <Grid item xs={12} className={classes.ProfileBGClasses.root}>
            <img
              src="https://www.van-tramp.com/wp/wp-content/uploads/2013/07/IMG_5831.jpg"
              alt="profile background"
              className="imgHero"
            />
          </Grid>
          <Grid item xs={12} className={classes.ProfileImageClasses.root}>
            <img
              src="http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png"
              alt="profile"
              className="imgPfp"
            />
            <div>
              <Typography variant="h6">{user.username}</Typography>
              <Typography variant="subtitle2">{user.full_name}</Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" className={classes.TaglineClasses.root}>
        <Grid item xs={12} md={5} lg={4}>
          <Typography variant="subtitle1">
            Here is my tagline that is under 240 that shows up on my profilecard
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} lg={4} container justify="flex-end">
          <Button variant="contained" type="submit" color="primary">
            Follow
          </Button>
          <Button variant="contained" type="submit" color="primary">
            Message
          </Button>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            onClick={gotoContacts}>
            Contacts
          </Button>
        </Grid>
      </Grid>
      <Grid container justify="center" className={classes.AboutClasses.root}>
        <Grid item xs={12} md={5} lg={4}>
          <Card>
            <CardContent>
              I am an experienced user with Blender and Substance Painter. I
              have a one released game created with Unity. I also have a lot of
              experience with UE4 Blueprints, materials and Niagara System.
              Looking for a unique game to create.
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5} lg={4} container justify="space-evenly">
          <Chip label="Substance Designerrr" />
          <Chip label="Substance Designerrr" />
          <Chip label="Substance Designerrr" />
          <Chip label="Substance Designerrr" />
          <Chip label="Substance Designerrr" />
          <Chip label="Substance Designerrr" />
        </Grid>
      </Grid>
    </div>
  );
};

export default UserProfile;
