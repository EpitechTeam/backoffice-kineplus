import React from "react";
import {Grid} from "@material-ui/core";
import {connect} from "react-redux";

function Profile(props) {
    return (
        <Grid container>
            Profile Page
        </Grid>
    );
 }

const mapStateToProps = state => {
    return {
        //user: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
     //   login: (email, password, history) => dispatch(login(email, password, history))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
