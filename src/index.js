import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
