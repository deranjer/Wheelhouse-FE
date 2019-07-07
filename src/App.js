import React, { useCallback, useState } from "react";
//Date Util Libraries
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
//
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import { Button } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { MuiThemeProvider } from "@material-ui/core/styles";

import HomePage from "./Components/Pages/homepage";
import ExamplePage from "./Components/Pages/examplePage";
import UserProfile from "./Components/Pages/userProfilePage";
import ProjectProfile from "./Components/Pages/projectPage";
import LoginPage from "./Components/Pages/loginPage";
import SearchPage from "./Components/Pages/searchPage";
import UserSettingsPage from "./Components/Pages/userSettingsPage";
import MessagesPage from "./Components/Pages/messagesPage";
import TopNavBar from "./Components/PageComponents/TopNavBar/TopNavBar";
import NewProjectPage from "./Components/Pages/newProjectPage";
import ContactsPage from "./Components/Pages/contactsPage";

import getTheme from "./getTheme";

const App = props => {
  const getTestNotifications = () => {
    var notifs = [];
    for (var i = 1; i <= 4; i++) {
      notifs.push({
        id: i,
        title: `notificaion #${i}`,
        text: `text of notification ${i}`,
        img: "https://via.placeholder.com/32",
        link: "/",
        timestamp: Date.now(),
        read: false
      });
    }
    return notifs;
  };

  var storageTheme =
    localStorage.getItem("theme") === null
      ? "light"
      : localStorage.getItem("theme");
  const [isLightTheme, setIsLightTheme] = useState(storageTheme === "light");
  const [themeIcon, setThemeIcon] = useState(
    storageTheme === "light" ? "🌑" : "🌞"
  );
  const [isDrawerPresent, setIsDrawerPresent] = useState(false);
  const [notifications, setNotifications] = useState(getTestNotifications());

  let appTheme = getTheme({ paletteType: storageTheme });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toggleTheme = useCallback(() => {
    setThemeIcon(!isLightTheme ? "🌑" : "🌞");
    localStorage.setItem("theme", isLightTheme ? "dark" : "light");
    setIsLightTheme(!isLightTheme);
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toggleDrawer = useCallback(() => {
    setIsDrawerPresent(!isDrawerPresent);
  });

  const navLinks = {
    Home: "/",
    Login: "/login",
    Profile: "/userprofile",
    Examples: "/examples",
    Project: "/projectpage",
    "New Project": "/newprojectpage",
    Search: "/searchpage",
    Settings: "/usersettings"
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <MuiThemeProvider theme={appTheme}>
        <CssBaseline />
        <Router>
          <div>
            <TopNavBar
              toggleTheme={toggleTheme}
              toggleDrawer={toggleDrawer}
              themeIcon={themeIcon}
              navLinks={navLinks}
              notifications={notifications}
            />
            <SwipeableDrawer
              open={isDrawerPresent}
              onClose={toggleDrawer}
              onOpen={toggleDrawer}>
              <div
                style={{ width: 270 }}
                role="presentation"
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}>
                <List>
                  {Object.keys(navLinks).map(k => (
                    <ListItem button key={k}>
                      <Button>
                        <Link
                          to={navLinks[k]}
                          style={{
                            textDecoration: "none",
                            color: isLightTheme ? "#000" : "#fff"
                          }}>
                          <ListItemText primary={k} />
                        </Link>
                      </Button>
                    </ListItem>
                  ))}
                </List>
              </div>
            </SwipeableDrawer>
            <Switch>
              <Route path="/" exact component={HomePage} />} />
              <Route
                path="/userprofile"
                exact
                render={props => <UserProfile appTheme={appTheme} {...props} />}
              />
              <Route path="/login" exact component={LoginPage} />
              <Route path="/examples" exact component={ExamplePage} />
              <Route path="/projectpage" exact component={ProjectProfile} />
              <Route path="/searchpage" exact component={SearchPage} />
              <Route path="/usersettings" exact component={UserSettingsPage} />
              <Route
                path="/messagespage"
                exact
                render={() => <MessagesPage appTheme={appTheme} />}
              />
              <Route path="/newprojectpage" exact component={NewProjectPage} />
              <Route
                path="/users/:id/contacts"
                exact
                render={props => (
                  <ContactsPage
                    appTheme={appTheme}
                    id={props.match.params.id}
                  />
                )}
              />
            </Switch>
            <p />
          </div>
        </Router>
      </MuiThemeProvider>
    </MuiPickersUtilsProvider>
  );
};

export default App;
