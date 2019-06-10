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
import { ThemeProvider } from '@material-ui/styles';
import darkTheme from './darkTheme';
import lightTheme from './lightTheme';
import NewProjectPage from './Components/Pages/newProjectPage';
import CssBaseline from '@material-ui/core/CssBaseline';

// state = {
//   isThemeLight: true,
// };
// changeTheme = () => {
//   console.log('THEME SHOULD BE CHANGED!!');
//   this.setState = { isThemeLight: !this.state.isThemeLight };
// };
// const { isThemeLight } = this.state;

const App = props => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [themeIcon, setThemeIcon] = useState('🌑');
  const changeTheme = useCallback(() => {
    setIsLightTheme(!isLightTheme);
    setThemeIcon(isLightTheme ? '🌞' : '🌑');
  });

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <CssBaseline />
      <Router>
        <div>
          <Switch>
            <Route
              path='/'
              exact
              render={props => <HomePage changeTheme={changeTheme} themeIcon={themeIcon} />}
            />
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
          <Nav />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
