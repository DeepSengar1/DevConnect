import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ClerkProvider } from '@clerk/clerk-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ClerkProvider publishableKey={"pk_test_cHJvcGVyLWJ1bGxkb2ctNTYuY2xlcmsuYWNjb3VudHMuZGV2JA"}>
    <Router>
      <App />
    </Router>
  </ClerkProvider>
);

reportWebVitals();
