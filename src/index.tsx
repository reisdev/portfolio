import ReactDOM from 'react-dom';

import App from './App';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';

import "core/tracking/google-analytics";
import "core/tracking/firebase-analytics";

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();