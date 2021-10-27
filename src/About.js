import React, {Component} from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <h2>About our college</h2>
      </div>
    );
  }

  componentDidMount() {
    console.log("about being mounted");
  }
}
