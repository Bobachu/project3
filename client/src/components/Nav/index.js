import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../Form";
import "./nav.css"

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
        <div className="w3-bar w3-row w3-padding w3-black" id="navBar">
          {/* <div className="w3-col s3"> */}
            <a href="/" className="w3-button w3-block w3-black w3-bar-item w3-mobile">
              HOME
            </a>
          {/* </div> */}
          {/* <div className="w3-col s3" id="navSearch"> */}
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Game"
              className="w3-bar-item w3-mobile"
            />
          {/* </div> */}
          {/* <div className="w3-col s3"> */}
            <FormBtn className="w3-bar-item w3-mobile">Search</FormBtn>
          {/* </div> */}
          {/* <div className="w3-col s3 w3-right"> */}
            <a href="#where" className="w3-button w3-block w3-black w3-bar-item w3-right w3-mobile">
              LOGIN
            </a>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default Nav;
