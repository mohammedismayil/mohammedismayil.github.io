import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 
import {Route, Link, BrowserRouter as Router} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Header from "./Components/Header";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Header></Header>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
