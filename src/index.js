import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import reducers from "./reducers";
const middleware = [thunk];
const middlewareEnhancer = applyMiddleware(...middleware);

const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(middlewareEnhancer)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
