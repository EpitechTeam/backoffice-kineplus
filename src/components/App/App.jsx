import React from 'react';
import AppMenu from '../Menu/Menu.jsx';
import {Provider} from "react-redux";
import { ThemeProvider } from '@material-ui/styles';
import store from '../../redux/store'
import theme from '../../styles/theme'
import Routes from "../Routes/Routes.jsx";

function App() {
    console.log("Render!");
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <AppMenu/>
                <Routes />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
