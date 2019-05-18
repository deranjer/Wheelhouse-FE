import React from 'react';
import 'semantic-ui-css/semantic.min.css';

class ProfilePage extends React.Component {
    render() {
        const logout = () => {
            // token must be removed after logout post is successful
            localStorage.removeItem('token');
            this.props.history.push('/');
        };

        return (
            <div style={{ padding: 10 }}>
                <h1>Profile</h1>
                <button onClick={logout}>logout</button>
            </div>
        );
    }
}

export default ProfilePage;
