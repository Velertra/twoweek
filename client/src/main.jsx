import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '../src/styles/index.css';
import Router from './utilities/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)