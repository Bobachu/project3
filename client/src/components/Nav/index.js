import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../Form";

class Nav extends Component {
  state = {
    title: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="w3-top">
        <div className="w3-row w3-padding w3-black">
          <div className="w3-col s3">
            <a href="/" className="w3-button w3-block w3-black">
              HOME
            </a>
          </div>
          <div className="w3-col s3">
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Game"
            />
          </div>
          <div className="w3-col s3">
            <FormBtn>Search</FormBtn>
          </div>
          <div className="w3-col s3 w3-right">
            <a href="#where" className="w3-button w3-block w3-black">
              LOGIN
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
