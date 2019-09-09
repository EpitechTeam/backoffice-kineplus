import React from 'react';
import AppMenu from '../Menu/Menu.jsx';
import {Provider} from "react-redux";
import { ThemeProvider } from '@material-ui/styles';
import store from '../../redux/store'
import theme from '../../styles/theme'
import Routes from "../Routes/Routes.jsx";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <div>
                    <AppMenu/>
                    <div style={{width: '100%', height: '100%'}}>
                        <main>
                            <Routes />
                        </main>
                    </div>
                </div>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
