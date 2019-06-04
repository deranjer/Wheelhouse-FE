import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginBottom: '13px',
    },
    maLink: {
        textDecoration: 'none',
        marginRight: '13px',
        color: '#fff',
    },
    marBar: {
        backgroundColor: '#1f2324',
    },
});

function Nav() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position='static' color='primary'>
                <Toolbar>
                    <Link to='/' className={classes.maLink}>
                        <Typography variant='h6' color='inherit'>
                            Home
                        </Typography>
                    </Link>
                    <Link to='/login' className={classes.maLink}>
                        <Typography variant='h6' color='inherit'>
                            Login
                        </Typography>
                    </Link>
                    <Link to='/userprofile' className={classes.maLink}>
                        <Typography variant='h6' color='inherit'>
                            Profile
                        </Typography>
                    </Link>
                    <Link to='/examples' className={classes.maLink}>
                        <Typography variant='h6' color='inherit'>
                            Example Components
                        </Typography>
                    </Link>
					<Link to='/projectpage' className={classes.maLink}>
						<Typography variant='h6' color='inherit'>
							Project Page
						</Typography>
                    </Link>
					<Link to='/searchpage' className={classes.maLink}>
						<Typography variant='h6' color='inherit'>
							Search Page
						</Typography>
                    </Link>
					<Link to='/usersettings' className={classes.maLink}>
						<Typography variant='h6' color='inherit'>
							User Settings Page
						</Typography>
                    </Link>
					<Link to='/messagespage' className={classes.maLink}>
						<Typography variant='h6' color='inherit'>
							Messages Page
						</Typography>
                    </Link>
					<Link to='/newprojectpage' className={classes.maLink}>
						<Typography variant='h6' color='inherit'>
							New Project Page
						</Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Nav;
