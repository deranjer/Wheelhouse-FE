import React, { useCallback, useState, useEffect } from 'react';
//Date Util Libraries
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
//
import Nav from './Components/PageComponents/nav';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import { Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ThemeProvider } from '@material-ui/styles';

import HomePage from './Components/Pages/homepage';
import ExamplePage from './Components/Pages/examplePage';
import UserProfile from './Components/Pages/userProfilePage';
import ProjectProfile from './Components/Pages/projectPage';
import LoginPage from './Components/Pages/loginPage';
import SearchPage from './Components/Pages/searchPage';
import UserSettingsPage from './Components/Pages/userSettingsPage';
import MessagesPage from './Components/Pages/messagesPage';
import TopNavBar from './Components/PageComponents/TopNavBar/TopNavBar';
import NewProjectPage from './Components/Pages/newProjectPage';

import darkTheme from './darkTheme';
import lightTheme from './lightTheme';

// Hook
function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

const App = props => {
  var storageTheme =
    localStorage.getItem('theme') === undefined ? 'light' : localStorage.getItem('theme');
  const [isLightTheme, setIsLightTheme] = useState(storageTheme === 'light');
  const [themeIcon, setThemeIcon] = useState(storageTheme === 'light' ? '🌑' : '🌞');
  const [isDrawerPresent, setIsDrawerPresent] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toggleTheme = useCallback(() => {
    setThemeIcon(!isLightTheme ? '🌑' : '🌞');
    localStorage.setItem('theme', isLightTheme ? 'dark' : 'light');
    setIsLightTheme(!isLightTheme);
  });

  const toggleDrawer = useCallback(() => {
    setIsDrawerPresent(!isDrawerPresent);
  });

  const size = useWindowSize();

  const navLinks = {
    Home: '/',
    Login: '/login',
    Profile: '/userprofile',
    Examples: '/examples',
    Project: '/projectpage',
    'New Project': '/newprojectpage',
    Search: '/searchpage',
    Settings: '/usersettings',
  };
  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <CssBaseline />
        <Router>
          <div>
            <TopNavBar
              toggleTheme={toggleTheme}
              toggleDrawer={toggleDrawer}
              themeIcon={themeIcon}
              navLinks={navLinks}
              wideScreen={size.width >= 1280}
            />
            {/* <Nav /> no need anymore */}
            <SwipeableDrawer open={isDrawerPresent} onClose={toggleDrawer} onOpen={toggleDrawer}>
              <div
                style={{ width: 270 }}
                role='presentation'
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}>
                <List>
                  {Object.keys(navLinks).map(k => (
                    <ListItem button key={k}>
                      <Button>
                        <Link
                          to={navLinks[k]}
                          style={{ textDecoration: 'none', color: isLightTheme ? '#000' : '#fff' }}>
                          <ListItemText primary={k} />
                        </Link>
                      </Button>
                    </ListItem>
                  ))}
                </List>
              </div>
            </SwipeableDrawer>
            <Switch>
              <Route path='/' exact component={HomePage} />} />
              <Route path='/userprofile' exact component={UserProfile} />
              <Route path='/login' exact component={LoginPage} />
              <Route path='/examples' exact component={ExamplePage} />
              <Route path='/projectpage' exact component={ProjectProfile} />
              <Route path='/searchpage' exact component={SearchPage} />
              <Route path='/usersettings' exact component={UserSettingsPage} />
              <Route path='/messagespage' exact component={MessagesPage} />
              <Route path='/newprojectpage' exact component={NewProjectPage} />
            </Switch>
            <p />
          </div>
        </Router>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default App;
