import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Nav from './PageComponents/nav';
import HomePage from './Pages/homepage';
import ExamplePage from './Pages/examplePage';

function App() {
  return (
    <Router>
      <div> 
   
          <Switch>
            <Route path="/" exact component={HomePage} />
            
            <Route path="/examples" component={ExamplePage} />
          </Switch>
          <p/>
          <Nav />
      </div>
    </Router>
  );
}

export default App;
