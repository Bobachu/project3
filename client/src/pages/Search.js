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
      //     <div class="w3-container">
      //  <div className="w3-row" id="infoDiv">
      //  <div className="w3-col w3-container w3-green" id="gameInfo"></div>
      //  <div className="w3-col w3-container w3-blue" id="rating"></div>
      //  </div>
      // </div>
     
      <div class="w3-container w3-grey">
       <br/><br/>
       
  
        <div class="w3-row">
          <div class="w3-col m1 w3-center w3-grey"></div>
          <div class="w3-col m1 w3-center"></div>
          <div class="w3-col m1 w3-center w3-grey"></div>
          <div class="w3-col m1 w3-center"></div>
          <div class="w3-col m1 w3-center w3-grey"></div>
          <div class="w3-col m1 w3-center"></div>
          <div class="w3-col m1 w3-center w3-grey"></div>
          <div class="w3-col m1 w3-center"></div>
          <div class="w3-col m1 w3-center w3-grey"></div>
          <div class="w3-col m1 w3-center"></div>
          <div class="w3-col m1 w3-center w3-grey"></div>
          <div class="w3-col m1 w3-center"></div>
        </div>

        <div class="w3-row">
          <div class="w3-col w3-container m8 l8 w3-yellow" id="gameInfo">
          
            <p>This part will occupy 12 columns on a small screen, 8 on a medium screen, and 8 on a large screen.</p>
          </div>
          <div class="w3-col w3-container m4 l4" id="rating">
            <p>This part will occupy 12 columns on a small screen, 4 on a medium screen, and 4 on a large screen.</p>
            <p>This part will occupy 12 columns on a small screen, 4 on a medium screen, and 4 on a large screen.</p>
          </div>
        </div>

        <div class="w3-row">
          <div class="w3-col m12 w3-center w3-grey" id="twitch">Twitch
          </div>
          </div>
          <div class="w3-row">
          <div class="w3-col m12 w3-center w3-red" id="purchase">Purchase
          </div>
          </div>
        




      </div>
    );
  }
}

export default Search;
