import AllRoutes from './routes';
import {
  BrowserRouter, Routes,
  Route, 
} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import Reducer from './reducers';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

ReactDOM.render(
    <Provider
        store={createStoreWithMiddleware(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__())} >
        <AllRoutes />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
