import React from 'react';
import {
    AppRegistry
} from 'react-native';
import { Provider } from 'react-redux';
import App from './src/app.js';
import store from './redux/store.js';

const rootComp = () => (
    <Provider  store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent('employeeList', () => rootComp);
