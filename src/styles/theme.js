import { createMuiTheme } from '@material-ui/core/styles';
import {amber, green} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: green,
        secondary: amber,
        textPrimary: 'white'
    }
});

export default theme;
