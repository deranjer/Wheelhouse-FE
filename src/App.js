import React from 'react';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Nav from './Components/PageComponents/nav';
import HomePage from './Components/Pages/homepage';
import ExamplePage from './Components/Pages/examplePage';
import UserProfile from './Components/Pages/userProfilePage';
import LoginPage from './Components/Pages/loginPage';

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/userprofile' exact component={UserProfile} />
                    <Route path='/login' exact component={LoginPage} />
                    <Route path='/examples' exact component={ExamplePage} />
                </Switch>
                <p />
            </div>
        </Router>
    );
}

export default App;
