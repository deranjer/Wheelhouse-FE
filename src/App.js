import React from 'react';
import styled from 'styled-components/macro';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Nav from './PageComponents/nav';
import HomePage from './Pages/homepage';
import ExamplePage from './Pages/examplePage';
import UserProfile from './Pages/userProfilePage';

function App() {
  return (
    <Router>
      <div> 
   
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/userprofile" exact component={UserProfile} />
            <Route path="/examples" exact component={ExamplePage} />
          </Switch>
          <p/>
          <Nav />
      </div>
    </Router>
  );
}

export default App;
