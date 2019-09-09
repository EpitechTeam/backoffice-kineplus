import React from "react";
import {connect} from "react-redux";
import {Button, Grid, Typography} from "@material-ui/core";
import {login} from "./LoginAction";

function Login(props) {
    return (
        <Grid container direction="column" alignItems="center">
            <Grid item>
                <Button variant="contained" color="secondary" onClick={props.login('', '')}>
                    <Typography variant="button" color="textPrimary">LOGIN</Typography>
                </Button>
            </Grid>
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
