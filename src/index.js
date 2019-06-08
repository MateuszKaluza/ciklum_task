import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import localStorage from 'localStorage';

import reducer from './store/reducer';

const initialState = {
    pair: '',
    side: 'BUY',
    orderType: 'MARKET',
    limit: 0,
    quantity: 0,
    orders: JSON.parse(localStorage.getItem('orders')) || []
};

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
