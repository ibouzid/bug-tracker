import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import StartComponent from "./Components/StartComponent";
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(<Router><StartComponent /></Router>, document.getElementById('root'));

serviceWorker.unregister();
