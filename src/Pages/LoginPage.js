import React from 'react';
import 'semantic-ui-css/semantic.min.css';

class LoginPage extends React.Component {
    render() {
        const login = () => {
            // just a simple place holder ...
            localStorage.setItem('token', 'thisshouldbefetshedafterasuccessfullogin');
            this.props.history.push('/');
        };

        return (
            <div style={{ padding: 10 }}>
                <h1>login</h1>
                <button onClick={login}>login</button>
            </div>
        );
    }
}

export default LoginPage;
