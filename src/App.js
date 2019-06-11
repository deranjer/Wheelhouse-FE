import React, { useCallback, useState } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Nav from './Components/PageComponents/nav';
import HomePage from './Components/Pages/homepage';
import ExamplePage from './Components/Pages/examplePage';
import UserProfile from './Components/Pages/userProfilePage';
import ProjectProfile from './Components/Pages/projectPage';
import LoginPage from './Components/Pages/loginPage';
import SearchPage from './Components/Pages/searchPage';
import UserSettingsPage from './Components/Pages/userSettingsPage';
import MessagesPage from './Components/Pages/messagesPage';
import TopNavBar from './Components/PageComponents/TopNavBar/TopNavBar';
import { ThemeProvider } from '@material-ui/styles';
import darkTheme from './darkTheme';
import lightTheme from './lightTheme';
import NewProjectPage from './Components/Pages/newProjectPage';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = props => {
  var storageTheme =
    localStorage.getItem('theme') === undefined ? 'light' : localStorage.getItem('theme');
  const [isLightTheme, setIsLightTheme] = useState(storageTheme === 'light');
  const [themeIcon, setThemeIcon] = useState(storageTheme === 'light' ? '🌑' : '🌞');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toggleTheme = useCallback(() => {
    setThemeIcon(!isLightTheme ? '🌑' : '🌞');
    localStorage.setItem('theme', isLightTheme ? 'dark' : 'light');
    setIsLightTheme(!isLightTheme);
  });

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <CssBaseline />
      <Router>
        <div>
          <TopNavBar toggleTheme={toggleTheme} themeIcon={themeIcon} />
          <Nav />
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
    </ThemeProvider>
  );
};

export default App;
