import React, { Component } from "react";
import { Input, FormBtn } from "../Form";
import Modal from "../Modal";
import "./nav.css";

class Nav extends Component {
  state = {
    title: "",
    username: "",
    password: "",
    show: false
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  searchesGame = () => {
    console.log(this.state.title);
    window.location.assign("/search/" + this.state.title);
   // return (
    //   <Link to={"/search/" + this.state.title} />
    // ) 
  };

  render() {
    return (
      <>
      <div className="w3-top">
        <div className="w3-bar w3-row w3-padding w3-black" id="navBar">
          {/* <div className="w3-col s3"> */}
          <a
            href="/"
            className="w3-button w3-block w3-black w3-bar-item w3-mobile"
          >
            HOME
          </a>
          {/* </div> */}
          {/* <div className="w3-col s3" id="navSearch"> */}
          <Input
            value={this.state.title}
            onChange={this.handleInputChange}
            name="title"
            placeholder="Game"
            className="w3-bar-item w3-mobile w3-round-large"
          />
          {/* </div> */}
          {/* <div className="w3-col s3"> */}
          <FormBtn
            className="w3-bar-item w3-mobile"
            style={{ marginLeft: 10 }}
            onClick={this.searchesGame}
          >
            Search
          </FormBtn>
          {/* </div> */}
          {/* <div className="w3-col s3 w3-right"> */}
          <a
            href="#where"
            className="w3-button w3-block w3-black w3-bar-item w3-right w3-mobile"
            onClick={this.showModal}
          >
            LOGIN
          </a>
          {/* </div> */}
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <button
              className="w3-button w3-xlarge w3-hover-red w3-display-topright"
              onClick={this.hideModal}
            >
              X
            </button>
            <br />
            <br />
            <label>
              <b>Username</b>
            </label>
            <Input
              value={this.state.username}
              onChange={this.handleInputChange}
              name="username"
              placeholder="Username"
            />
            <br />
            <br />
            <label>
              <b>Password</b>
            </label>
            <Input
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              placeholder="Password"
              type="password"
            />
            <button
              style={{ marginTop: 30 }}
              className="w3-display-left w3-button w3-teal w3-round-large"
            >
              Login
            </button>
            <p style={{ marginTop: 30 }}>OR</p>
            <button
              style={{ marginTop: 30 }}
              className="w3-display-right w3-button w3-teal w3-round-large"
            >
              Sign Up
            </button>
          </Modal>
        </div>
      </div>
      </>
    );
  }
}

export default Nav;
