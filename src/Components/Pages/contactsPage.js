import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Grid, Card, Typography, Button, Hidden } from "@material-ui/core";

const ContactsPage = props => {
  function TabContainer({ children, dir }) {
    return (
      <Typography component="div" dir={dir} style={{ padding: 8 * 2 }}>
        {children}
      </Typography>
    );
  }

  const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.paper
    }
  }));

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  // should be retrieved from the BE
  let followers = [];
  let following = [];

  for (let i = 10; i < 20; i++) {
    var user = { id: i, username: `user_${i}`, full_name: `User ${i} McUser` };
    followers.push(user);
    following.push(user);
  }

  return (
    <Grid container>
      <Hidden xsDown>
        <Grid item md={3} />
      </Hidden>
      <Grid item xs={12} md={6} className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth">
            <Tab label="Followers" />
            <Tab label="Following" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}>
          <TabContainer dir={theme.direction}>
            <div>
              <Grid container spacing={2}>
                <Hidden xsDown>
                  <Grid item md={1} lg={2} />
                </Hidden>
                <Grid item xs={12} md={10} lg={8}>
                  {followers.map((u, i) => {
                    return <Typography varient="h6">{u.full_name}</Typography>;
                  })}
                </Grid>
              </Grid>
            </div>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <div>
              <Grid container spacing={2}>
                <Hidden xsDown>
                  <Grid item md={1} lg={2} />
                </Hidden>
                <Grid item xs={12} md={10} lg={8}>
                  {following.map((u, i) => {
                    return <Typography varient="h6">{u.full_name}</Typography>;
                  })}
                </Grid>
              </Grid>
            </div>
          </TabContainer>
        </SwipeableViews>
      </Grid>
      <Hidden xsDown>
        <Grid item md={3} />
      </Hidden>
    </Grid>
  );
};

export default ContactsPage;
