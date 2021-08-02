import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

// (async () => {
//   const {publishableKey} = await fetch('/config').then(r => r.json(>))
// })


ReactDOM.render(
  <Router>
    <React.StrictMode>
      {/* <Elements stripe={stripePromise}> */}
      <App />
      {/* </Elements> */}
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
