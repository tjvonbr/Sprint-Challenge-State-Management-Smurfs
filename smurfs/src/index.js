import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import "./index.css";
import App from "./components/App";

import { reducer } from './reducers/smurfReducer';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
<Provider store={ store }>
  <App />
</Provider>, 
document.getElementById("root"));
