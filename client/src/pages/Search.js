import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";

class Search extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // componentDidMount() {
  //   API.getBook(this.props.match.params.id)
  //     .then(res => this.setState({ book: res.data }))
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      //     <div className="w3-container">
      //  <div classNameName="w3-row" id="infoDiv">
      //  <div classNameName="w3-col w3-container w3-green" id="gameInfo"></div>
      //  <div classNameName="w3-col w3-container w3-blue" id="rating"></div>
      //  </div>
      // </div>

      <div className="w3-container w3-grey">
        <br /><br />


        <div className="w3-row">
          <div className="w3-col m1 w3-center w3-grey"></div>
          <div className="w3-col m1 w3-center"></div>
          <div className="w3-col m1 w3-center w3-grey"></div>
          <div className="w3-col m1 w3-center"></div>
          <div className="w3-col m1 w3-center w3-grey"></div>
          <div className="w3-col m1 w3-center"></div>
          <div className="w3-col m1 w3-center w3-grey"></div>
          <div className="w3-col m1 w3-center"></div>
          <div className="w3-col m1 w3-center w3-grey"></div>
          <div className="w3-col m1 w3-center"></div>
          <div className="w3-col m1 w3-center w3-grey"></div>
          <div className="w3-col m1 w3-center"></div>
        </div>

        <div className="w3-row">
          <div className="w3-col w3-container m8 l8 w3-yellow" id="gameInfo">
            <div className="w3-row">
              <h2><b>Game Title</b></h2>
            </div>
            <div className="w3-row">
              <div className="w3-col game-image">
                <img src="https://via.placeholder.com/225x300" alt="game" />
              </div>
              <div className="w3-col game-desc">
                <h4><b>Summary</b></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra vitae dolor eget consectetur. Donec sapien urna, eleifend id quam vel, porta congue orci. Nulla tincidunt arcu vel congue congue. Mauris semper sed tellus sit amet cursus. Vivamus vel massa sed arcu vehicula consectetur at sed mauris. Nulla facilisi. Aliquam condimentum lacinia eros, a fermentum mauris eleifend eget. Nunc a venenatis metus, eu maximus eros. Maecenas faucibus tortor sed pellentesque convallis. Vestibulum non tristique leo. Aenean et risus ac odio lobortis aliquam vel ac nulla. Mauris eget dolor scelerisque dui convallis tristique quis sit amet turpis.</p>
                <p><b>Genres: </b>Adventure, Action, Fantasy</p>
              </div>
            </div>
          </div>
          <div className="w3-col w3-container m4 l4" id="rating">
            <p>This part will occupy 12 columns on a small screen, 4 on a medium screen, and 4 on a large screen.</p>
            <p>This part will occupy 12 columns on a small screen, 4 on a medium screen, and 4 on a large screen.</p>
          </div>
        </div>

        <div className="w3-row">
          <div className="w3-col m12 w3-center w3-grey" id="twitch">Twitch
          </div>
        </div>
        <div className="w3-row">
          <div className="w3-col m12 w3-center w3-red" id="purchase">Purchase
          </div>
        </div>

      </div>
    );
  }
}

export default Search;
