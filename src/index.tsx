import { createRoot } from 'react-dom/client';

import App from './App';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';

import "core/tracking/google-analytics";
import "core/tracking/firebase-analytics";

let root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();