import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Avatar, Button, Grid, Input, InputAdornment, Paper, Typography} from "@material-ui/core";
import {Email} from "@material-ui/icons";
import theme from "../../styles/theme";
import {recoverEmail, updateEmail} from "./RecoveryAction";
import "./Recovery.scss"

function Recovery(props) {
    const credentialStyle = { width: '60%', margin: '12px' };

    const handleChange = event => {
        props.updateEmail(event.target.value)
    };

    return (
        <Grid container direction="column" justify="center" alignItems="center" className="recovery-container">
            <Paper elevation={10} className="recovery-paper">
                <Grid container direction="column" justify="flex-start" alignItems="center">
                    <Typography variant="h3" color="textPrimary">Kineplus</Typography>
                    <Typography variant="h5" color="textPrimary">BACKOFFICE</Typography>
                    <Avatar className="recovery-avatar"><Email fontSize="large"/></Avatar>
                    <Typography variant="h4" color="textPrimary">EMAIL RECOVERY</Typography>
                </Grid>
                <Grid container direction="column" justify="space-between" alignItems="center">
                    <Input
                        id="email"
                        type="text"
                        value={props.recovery.email}
                        onChange={(event) => handleChange(event)}
                        startAdornment={
                            <InputAdornment position="start">
                                <Email />
                            </InputAdornment>
                        }
                        style={credentialStyle}
                    />
                    <Link to="/login" style={{color: theme.palette.primary.main}}>
                        Login
                    </Link>
                    <Button variant="contained" color="secondary" onClick={() => props.recoverEmail(props.recovery.email)}
                            style={{width: '40%', margin: '24px'}}>
                        <Typography variant="button" color="textPrimary">VALIDATE</Typography>
                    </Button>
                </Grid>
            </Paper>
        </Grid>
    );
}

const mapStateToProps = state => {
    return {
        recovery: state.recovery
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateEmail: (email) => dispatch(updateEmail(email)),
        recoverEmail: (email) => dispatch(recoverEmail(email))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Recovery);
