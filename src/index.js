import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {Route, Link, BrowserRouter as Router} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Header from "./Components/Header";

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <div>
//         <Header></Header>
//         <Route exact path="/" component={App} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//       </div>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.squareTapped = this.squareTapped.bind(this);
    this.state = {
      value: "",
      currentUser: "X",
      currentBool: true
    };
  }
  render() {
    return (
      <button className="square" onClick={this.squareTapped}>
        {this.state.value}
      </button>
    );
  }

  squareTapped() {
    this.setState({
      value: this.props.currentUser
    });
    console.log("after tapping square");
    this.props.updateCurrentUser(this.props.currentUser === "X" ? "O" : "X");
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "X"
    };
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  updateCurrentUser(childData) {
    console.log("update current user in Board");
    this.setState({
      currentUser: childData
    });
  }
  renderSquare(i) {
    return (
      <Square
        value={i}
        currentUser={this.state.currentUser}
        updateCurrentUser={this.updateCurrentUser}
      />
    );
  }

  render() {
    const status = "Next player : " + this.state.currentUser;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>

        <button onClick={this.resetGame}>Reset Game</button>
      </div>
    );
  }

  resetGame() {
    console.log("rendering again");
    this.render();
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
