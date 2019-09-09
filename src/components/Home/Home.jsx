import React from "react";
import {Button, Grid, Typography} from "@material-ui/core";

export function Home(props) {
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
