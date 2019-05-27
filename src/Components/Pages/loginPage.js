import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LoginRegister from 'react-mui-login-register';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({}));

class LoginPage extends Component {
    render() {
        const header = (
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='title' color='inherit'>
                        login to Wheelhouse
                    </Typography>
                </Toolbar>
            </AppBar>
        );

        return (
            <div>
                <LoginRegister
                    header={header}
                    onLogin={this.handleLogin}
                    onLoginWithProvider={this.handleLoginWithProvider}
                    onRegister={this.handleRegister}
                    onRegisterWithProvider={this.handleRegisterWithProvider}
                />
            </div>
        );
    }

    handleLogin = content => {
        alert(`Logging in with content '${JSON.stringify(content)}'`);
    };

    handleLoginWithProvider = providerId => {
        alert(`Logging in with provider '${providerId}'`);
    };

    handleRegister = content => {
        alert(`Registering with content '${JSON.stringify(content)}'`);
    };

    handleRegisterWithProvider = providerId => {
        alert(`Registering with provider '${providerId}'`);
    };
}

export default LoginPage;
