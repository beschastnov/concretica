import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import axios from 'axios';
import App from './App';

// axios.defaults.baseURL = process.env.REACT_APP_BASEURL;
// axios.defaults.withCredentials = false;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />,
);
