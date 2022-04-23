import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/styles/style.css';

require('dotenv').config()
let container = document.getElementById('root');
let root = createRoot(container);
root.render( < App / > );

serviceWorker.unregister();