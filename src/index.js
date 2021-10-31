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
      index: "",
      currentUser: "X",
      currentBool: true
    };
  }
  render() {
    return (
      <button className="square" onClick={this.squareTapped}>
        {this.props.value}
      </button>
    );
  }

  squareTapped() {
    console.log("selected square " + this.props.index);

    this.props.currentUsers.push(this.props.index);

    var nextUser = this.props.value === "X" ? "O" : "X";
    var currentUser = this.props.value.length === 0 ? "X" : "O";
    this.props.updateSquare(this.props.currentUsers, nextUser, currentUser);
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValue: "",
      currentUsers: ["", "", "", "", "", "", "", "", ""],
      nextUser: "X",
      currentUser: ""
    };
    this.updateSquare = this.updateSquare.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  // updateCurrentUser(childData) {
  //   console.log("update current user in Board");
  //   this.setState({
  //     currentUser: childData
  //   });
  // }
  updateSquare(childData, nextUser, currentUser) {
    this.setState({
      currentUser: currentUser,
      nextUser: nextUser,
      currentUsers: childData
    });
    // console.log("after tapping square");
    // if (this.props.value.length === 0) {
    //   this.props.updateCurrentUser(this.props.currentUser === "X" ? "O" : "X");
    // }
  }
  renderSquare(i) {
    return (
      <Square
        value={this.state.currentUser}
        currentUsers={this.state.currentUsers}
        updateSquare={this.updateSquare}
        index={i}
      />
    );
  }

  renderinitialSquare(i) {
    this.setState({
      currentUser: ""
    });
  }

  render() {
    const status = "Next player : " + this.state.nextUser;

    const rows = [1, 2, 3];
    // eslint-disable-next-line array-callback-return
    const lists = this.state.currentUsers.map((currentUser, index) => {
      // console.log(index);
      if (index === 0 || index === 1 || index === 2) {
        return (
          <div className="board-row">
            {this.renderSquare(index === 0 ? 0 : index === 1 ? 3 : 6)}
            {this.renderSquare(index === 0 ? 1 : index === 1 ? 4 : 7)}
            {this.renderSquare(index === 0 ? 2 : index === 1 ? 5 : 8)}
          </div>
        );
      }
    });
    return (
      <div>
        <div className="status">{status}</div>
        {lists}
        {/* <div className="board-row">
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
        </div> */}
        <button onClick={this.resetGame}>Reset Game</button>
      </div>
    );
  }

  resetGame() {
    console.log("rendering again");
    this.setState({
      currentUser: ""
    });
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
