import React from "react";
import {connect} from "react-redux";
import {Button, Grid, Paper, Typography} from "@material-ui/core";
import {login} from "./LoginAction";
import './Login.scss'

function Login(props) {
    return (
        <Grid container direction="column" justify="center" alignItems="center" className="login-container">
            <Paper className="login-paper">
                <Grid container direction="column" justify="flex-start" alignItems="center">
                    <Paper elevation={2} style={{padding: '24px', display: 'flex', justifyContent: 'center'}}>
                        <Typography variant="h5" color="textPrimary">LOGIN</Typography>
                        <Typography variant="h5" color="textPrimary">BACKOFFICE KINEPLUS</Typography>
                    </Paper>
                </Grid>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Button variant="contained" color="secondary" onClick={() => props.login('', '')}>
                        <Typography variant="button" color="textPrimary">LOGIN</Typography>
                    </Button>
                </Grid>
            </Paper>
        </Grid>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(login(email, password))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
