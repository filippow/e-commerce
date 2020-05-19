import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'

import {store, persistor} from './redux/store';

import './index.scss';
import App from './App';
import {isElement} from "react-dom/test-utils";
import diff from "redux-logger/src/diff";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <PersistGate persistor={persistor}>
                    <App/>
                </PersistGate>
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

