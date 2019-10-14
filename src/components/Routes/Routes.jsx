import React from "react";
import {connect} from "react-redux";
import {Switch, Route} from 'react-router'
import {BrowserRouter as Router, Redirect} from "react-router-dom";
import {Grid} from "@material-ui/core";
import Login from "../Login/Login";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";

function NoPage() {
    return (
        <Grid container>
            Error 404: Page Not Found
        </Grid>
    );
}

function PrivateRoute({children, ...rest}) {
    return (
        <Route {...rest}>
            { rest.auth ? children : <Redirect push to="/login" /> }
        </Route>
    );
}

function Routes(props) {
    return (
        <Router>
            <Grid container direction={'column'} justify="center" style={{width: '100%', height: '100%'}}>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <PrivateRoute path="/home" auth={props.user.authenticated}>
                        <Home />
                    </PrivateRoute>s
                    <PrivateRoute path="" auth={props.user.authenticated}>
                        <Home />
                    </PrivateRoute>
                    <PrivateRoute path="/" auth={props.user.authenticated}>
                        <Home />
                    </PrivateRoute>
                    <PrivateRoute path="/profile" auth={props.user.authenticated}>
                        <Profile />
                    </PrivateRoute>
                    <Route path="*">
                        <NoPage />
                    </Route>
                </Switch>
            </Grid>
        </Router>
    );
}

const mapStateToProps = state => {
    return {
        menu: state.menu,
        user: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        //redirect: (path) => dispatch(redirect(path, true))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
