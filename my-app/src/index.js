import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import StartComponent from "./Components/StartComponent";

ReactDOM.render(<StartComponent />, document.getElementById('root'));

serviceWorker.unregister();
