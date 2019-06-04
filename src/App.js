import React from 'react';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Nav from './Components/PageComponents/nav';
import HomePage from './Components/Pages/homepage';
import ExamplePage from './Components/Pages/examplePage'; 
import UserProfile from './Components/Pages/userProfilePage';
import ProjectProfile from './Components/Pages/projectPage';
import SearchPage from './Components/Pages/searchPage';
import UserSettingsPage from './Components/Pages/userSettingsPage';
import MessagesPage from './Components/Pages/messagesPage';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import NewProjectPage from './Components/Pages/newProjectPage';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div> 
    
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/userprofile" exact component={UserProfile} />
              <Route path="/examples" exact component={ExamplePage} />
              <Route path="/projectpage" exact component={ProjectProfile} />
              <Route path="/searchpage" exact component={SearchPage} />
              <Route path="/usersettings" exact component={UserSettingsPage} />
              <Route path="/messagespage" exact component={MessagesPage} />
              <Route path="/newprojectpage" exact component={NewProjectPage} />
            </Switch>
            <p/>
            <Nav />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
