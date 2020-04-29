import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import { unregister } from './serviceWorker';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/scss/agency.css';
import store from './stores/myStore'


// import { createStore } from 'redux';
// import myReducer from './reducers/index';
import { Provider } from 'react-redux';
// const store = createStore(myReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const _store = store;
ReactDOM.render(
    <BrowserRouter>
        <Provider store={_store} >
            <App />
        </Provider>
    </BrowserRouter>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// serviceWorker.register();
// unregister();
