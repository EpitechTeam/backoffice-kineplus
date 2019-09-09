import React from 'react';
import {connect} from "react-redux";
import {AppBar, Grid, IconButton, Toolbar, Typography} from "@material-ui/core";
import {ExitToApp, Menu} from "@material-ui/icons";
import {logoutUser} from "../User/UserAction";
import {toggleMeuDrawer} from "../Menu/MenuAction";
import {MenuNavigation} from './MenuNavigation.jsx'

function AppMenu(props) {
    return (
        <div>
            {
                props.user.authenticated ?
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" color="primary" aria-label="menu"
                                        onClick={() => props.toggleMeuDrawer(true)}>
                                <Menu style={{color: 'white'}}/>
                            </IconButton>
                            <Typography variant="h6" color={"textPrimary"}>
                                Kineplus
                            </Typography>
                            {props.user.authenticated && (
                                <Grid container justify="flex-end">
                                    <IconButton
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={() => props.logout()}
                                        style={{color: 'white'}}
                                    >
                                        <ExitToApp/>
                                    </IconButton>
                                </Grid>
                            )}
                        </Toolbar>
                    </AppBar>
                    : null
            }
            <MenuNavigation user={props.user} open={props.menu.open} toggleMenu={props.toggleMeuDrawer}/>
        </div>
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
        logout: () => dispatch(logoutUser()),
        toggleMeuDrawer: (isOpen) => dispatch(toggleMeuDrawer(isOpen))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppMenu);
