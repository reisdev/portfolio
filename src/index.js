import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// JS Imports

// CSS imports
import './css/index.css';
import './css/App.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
