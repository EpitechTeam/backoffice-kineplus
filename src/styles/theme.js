import { createMuiTheme } from '@material-ui/core/styles';
import {green} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#2AB9B6'
        },
        secondary: green,
        textPrimary: 'white'
    }
});

export default theme;
