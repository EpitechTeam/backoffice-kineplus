import React from "react";
import {connect} from "react-redux";
import {Card, Grid, Typography} from "@material-ui/core";
import {login} from "../Login/LoginAction";
import {Person, Star} from "@material-ui/icons";

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Home(props) {
    const featureStyle = {margin: '24px', padding: '12px'};
    const features = [
        {name: 'Doctors', amount: 45, route: '/doctors', icon: Star, color: 'yellow'},
        {name: 'Patients', amount: 10324, route: '/patients', icon: Person, color: 'red'}
    ];
    // map used to format number to include commas for thousands

    return (
        <Grid container direction="row" justify="flex-start">
            {
                features.map((item, index) => (
                    <Card key={index} style={featureStyle}>
                        <Grid container direction="row" wrap="nowrap" alignItems="center" onClick={() => console.log('redirect: ' + item.route)}>
                            <Grid container direction="column" style={{marginRight: '32px'}}>
                                <Typography variant="h4" color="textPrimary">{item.name}</Typography>
                                <Typography variant="h4" color="textPrimary">{formatNumber(item.amount)}</Typography>
                            </Grid>
                            <item.icon fontSize="large" style={{color: item.color}}/>
                            {/*<Icon className="fa fa-plus-circle" color="primary" />*/}
                        </Grid>
                    </Card>
                ))
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
