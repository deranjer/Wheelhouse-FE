import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid, Card, Typography, Button, Hidden } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import {
  FacebookLoginButton,
  TwitterLoginButton,
  GithubLoginButton,
  GoogleLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
} from 'react-social-login-buttons';

const LoginPage = props => {
  function TabContainer({ children, dir }) {
    return (
      <Typography component="div" dir={dir} style={{ padding: 8 * 2 }}>
        {children}
      </Typography>
    );
  }

  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
  };

  const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      maxWidth: '90vw',
      margin: '0 auto',
    },
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

  // can surely be better ...
  return (
    <Grid container>
      <Hidden xsDown>
        <Grid item md={3} align="center" />
      </Hidden>
      <Grid item xs={12} md={6} align="center" className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth">
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}>
          <TabContainer dir={theme.direction}>
            <div>
              <Grid container spacing={2}>
                <Hidden xsDown>
                  <Grid item md={1} lg={2} align="center" />
                </Hidden>
                <Grid item xs={12} md={10} lg={8} align="center">
                  <Card>
                    {/* <Typography variant='h6'>Login to Wheelhouse</Typography> */}
                    <Formik
                      initialValues={{ username: '', password: '' }}
                      onSubmit={(values, { setSubmitting }) => {
                        // TODO:: replace with the actual api call...
                        setTimeout(() => {
                          alert(JSON.stringify(values, null, 2));
                          setSubmitting(false);
                        }, 400);
                      }}>
                      {({ isSubmitting }) => (
                        <Form style={{ display: 'flex', flexWrap: 'wrap' }}>
                          <Field
                            name="username"
                            label="Username"
                            type="text"
                            component={TextField}
                            margin="normal"
                            required={true}
                            variant="outlined"
                            autoComplete="username"
                            fullWidth
                          />
                          <Field
                            name="password"
                            label="Password"
                            type="password"
                            component={TextField}
                            margin="normal"
                            required={true}
                            variant="outlined"
                            autoComplete="current-password"
                            fullWidth
                          />
                          <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                            disabled={isSubmitting}
                            style={{ marginTop: '8px', height: '50px' }}
                            fullWidth>
                            Login
                          </Button>
                          <FacebookLoginButton style={{ width: '100%', margin: '8px 0 0 0' }} />
                          <TwitterLoginButton style={{ width: '100%', margin: '8px 0 0 0' }} />
                          <InstagramLoginButton style={{ width: '100%', margin: '8px 0 0 0' }} />
                          <GoogleLoginButton style={{ width: '100%', margin: '8px 0 0 0' }} />
                          <LinkedInLoginButton style={{ width: '100%', margin: '8px 0 0 0' }} />
                          <GithubLoginButton style={{ width: '100%', margin: '8px 0 0 0' }} />
                        </Form>
                      )}
                    </Formik>
                  </Card>
                </Grid>
                <Hidden xsDown>
                  <Grid item md={1} lg={2} align="center" />
                </Hidden>
              </Grid>
            </div>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <div>
              <Grid container spacing={2} justify="center">
                <Hidden xsDown>
                  <Grid item md={1} lg={2} align="center" />
                </Hidden>
                <Grid item xs={12} md={10} lg={8} align="center">
                  <Card>
                    {/* <Typography variant='h6'>Login to Wheelhouse</Typography> */}
                    <Formik
                      initialValues={{ username: '', password: '' }}
                      onSubmit={(values, { setSubmitting }) => {
                        // TODO:: replace with the actual api call...
                        setTimeout(() => {
                          alert(JSON.stringify(values, null, 2));
                          setSubmitting(false);
                        }, 400);
                      }}>
                      {({ isSubmitting }) => (
                        <Form style={{ display: 'flex', flexWrap: 'wrap' }}>
                          <Field
                            name="username"
                            label="Username"
                            type="text"
                            component={TextField}
                            margin="normal"
                            required={true}
                            variant="outlined"
                            autoComplete="username"
                            fullWidth
                          />
                          <Field
                            name="email"
                            label="Email"
                            type="email"
                            component={TextField}
                            margin="normal"
                            required={true}
                            variant="outlined"
                            autoComplete="email"
                            fullWidth
                          />
                          <Field
                            name="password"
                            label="Password"
                            type="password"
                            component={TextField}
                            margin="normal"
                            required={true}
                            variant="outlined"
                            autoComplete="current-password"
                            fullWidth
                          />
                          <Field
                            name="password2"
                            label="Confirm Password"
                            type="password"
                            component={TextField}
                            margin="normal"
                            required={true}
                            variant="outlined"
                            autoComplete="current-password"
                            fullWidth
                          />
                          <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                            disabled={isSubmitting}
                            style={{ marginTop: '8px', height: '50px' }}
                            fullWidth>
                            Register
                          </Button>
                        </Form>
                      )}
                    </Formik>
                  </Card>
                </Grid>
                <Hidden xsDown>
                  <Grid item md={1} lg={2} align="center" />
                </Hidden>
              </Grid>
            </div>
          </TabContainer>
        </SwipeableViews>
      </Grid>
      <Hidden xsDown>
        <Grid item md={3} align="center" />
      </Hidden>
    </Grid>
  );
};

export default LoginPage;
