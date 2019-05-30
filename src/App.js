import React from 'react';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Nav from './Components/PageComponents/nav';
import HomePage from './Components/Pages/homepage';
import ExamplePage from './Components/Pages/examplePage'; 
import UserProfile from './Components/Pages/userProfilePage';
import ProjectProfile from './Components/Pages/projectPage';
import SearchPage from './Components/Pages/searchPage';
import { ThemeProvider } from '@material-ui/styles';
import theme from './MyMuiTheme';


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
            </Switch>
            <p/>
            <Nav />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
