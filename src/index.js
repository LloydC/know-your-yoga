import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/styles/style.css';

require('dotenv').config()

ReactDOM.render( < App / > , document.getElementById('root'));

serviceWorker.unregister();