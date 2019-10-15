import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Avatar, Button, Grid, Input, InputAdornment, Paper, Typography} from "@material-ui/core";
import {Email, Lock, Visibility, VisibilityOff} from "@material-ui/icons";
import {login, togglePasswordVisibility, updateCredential} from "./LoginAction";
import theme from "../../styles/theme";
import './Login.scss'

function loginUser(props) {
    // animation start, stop with dispatch
    props.loginUser(props.login.email, props.login.password);
}

function CredentialsInput(props) {
    const credentialStyle = { width: '60%', margin: '6px' };

    const handleChange = prop => event => {
        props.updateCredential(prop, event.target.value)
    };

    return (
        <Grid container direction="column" justify="space-evenly" alignItems="center">
            <Input
                id="email"
                type="text"
                value={props.login.email}
                onChange={handleChange("email")}
                startAdornment={
                    <InputAdornment position="start">
                        <Email />
                    </InputAdornment>
                }
                style={credentialStyle}
            />
            <Input
                id="adornment-password"
                type={props.login.showPassword ? 'text' : 'password'}
                value={props.login.password}
                onChange={handleChange("password")}
                startAdornment={
                    <InputAdornment position="start">
                        <Lock />
                    </InputAdornment>
                }
                endAdornment={
                    <InputAdornment position="end">
                        <Button
                            aria-label="toggle password visibility"
                            onClick={() => props.showPassword(!props.login.showPassword)}
                        >
                            {props.login.showPassword ? <Visibility/> : <VisibilityOff/>}
                        </Button>
                    </InputAdornment>
                }
                style={{...credentialStyle, marginBottom: "12px"}}
            />
        </Grid>
    );
}

function Login(props) {
    return (
        <Grid container direction="column" justify="center" alignItems="center" className="login-container">
            <Paper elevation={10} className="login-paper">
                <Grid container direction="column" justify="flex-start" alignItems="center">
                    <Typography variant="h3" color="textPrimary">Kineplus</Typography>
                    <Typography variant="h5" color="textPrimary">BACKOFFICE</Typography>
                    <Avatar className="login-avatar"><Lock fontSize="large"/></Avatar>
                    <Typography variant="h3" color="textPrimary">LOGIN</Typography>
                </Grid>
                <Grid container direction="column" justify="space-between" alignItems="center">
                    <CredentialsInput {...props} />
                    <Link to="/recovery" style={{color: theme.palette.primary.main}}>
                        Forgot password?
                    </Link>
                    <Button variant="contained" color="secondary" onClick={() => loginUser(props)}
                            style={{width: '40%', margin: '24px'}}>
                        <Typography variant="button" color="textPrimary">LOGIN</Typography>
                    </Button>
                </Grid>
            </Paper>
        </Grid>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user,
        login: state.login
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (email, password) => dispatch(login(email, password)),
        showPassword: (isVisible) => dispatch(togglePasswordVisibility(isVisible)),
        updateCredential: (type, credential) => dispatch(updateCredential(type, credential)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
