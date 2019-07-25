import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from "./App";
import reducer from './reducers'
import * as serviceWorker from "./serviceWorker";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
ReactDOM.render(
    <Provider 
        store={
            createStore(
                reducer,
                composeEnhancers(
                    applyMiddleware( thunk )
                )
            )
        }
    >
        <App/>    
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();