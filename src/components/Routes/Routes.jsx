import React from "react";
import {Switch, Route} from 'react-router'
import {BrowserRouter as Router} from "react-router-dom";
import Login from "../Login/Login";
import {Home} from "../Home/Home";
import {Grid} from "@material-ui/core";
import {connect} from "react-redux";

function NoPage() {
    return (
        <div>
            Error 404: Page Not Found
        </div>
    );
}

function PrivateRoute({auth, path, component}) {
    if (auth)
        return (<Route exact path={path} component={component}/>);
    return (<Route exact path={'/login'} component={Login}/>);
}

function Routes(props) {
    return (
        <Grid container direction={'column'}>
            <Router>
                <Switch>
                    <PrivateRoute path="/" component={Home} auth={props.user.authenticated}/>
                    <PrivateRoute path="/home" component={Home} auth={props.user.authenticated}/>
                    <PrivateRoute path="/login" component={Login} auth={props.user.authenticated}/>
                    <PrivateRoute component={NoPage} auth={props.user.authenticated}/>
                </Switch>
            </Router>
        </Grid>
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
        // increment: () => dispatch({ type: 'INCREMENT' }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
