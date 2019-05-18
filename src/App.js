import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Nav from './PageComponents/nav';
import HomePage from './Pages/homepage';
import ExamplePage from './Pages/examplePage';
import LoginPage from './Pages/LoginPage';
import ProfilePage from './Pages/ProfilePage';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem('token') ? <Component {...props} /> : <Redirect to='/login' />
        }
    />
);

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/examples' exact component={ExamplePage} />
                    <Route path='/login' exact component={LoginPage} />
                    <PrivateRoute path='/profile' exact component={ProfilePage} />
                </Switch>
                <p />
            </div>
        </Router>
    );
}

export default App;
