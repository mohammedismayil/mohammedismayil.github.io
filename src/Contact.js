import React, {Component} from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact this number</h2>
      </div>
    );
  }
  componentDidMount() {
    console.log("Contact being mounted");
  }
}
