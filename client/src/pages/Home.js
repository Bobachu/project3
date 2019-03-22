import React, { Component } from "react";
import "./style.css";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Home extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        {/* Header image and logo */}
        <header
          className="bgimg w3-display-container w3-grayscale-min"
          id="home"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage:
              "url('http://cafe-colette.com/images/cafe-colette-gallery-09.jpg')",
            minHeight: 500
          }}
        >
          {/* <div className="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
            <span className="w3-tag">Open from 6am to 5pm</span>
          </div> */}
          <div className="w3-display-middle w3-center">
            <span className="w3-text-white w3-wide w3-jumbo" id="logoText">
              GameAdvisor
            </span>
          </div>
          {/* <div className="w3-display-bottomright w3-center w3-padding-large">
            <span className="w3-text-white">15 Adr street, 5015</span>
          </div> */}
        </header>
        {/* page info and search bar */}
        <div className="w3-container" id="about">
          <div className="w3-content" style={{ maxWidth: 1300 }}>
            <h5 className="w3-center w3-padding-64">
              <span className="w3-tag w3-wide">About the Site</span>
            </h5>
            <p>
              The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Game"
            />
            <FormBtn>Search</FormBtn>
            <div className="w3-panel w3-leftbar w3-light-grey">
              <p>
                <i>
                  "Use products from nature for what it's worth - but never too
                  early, nor too late." Fresh is the new sweet.
                </i>
              </p>
              <p>Chef, Coffeeist and Owner: Liam Brown</p>
            </div>
            <img
              src="/w3images/coffeeshop.jpg"
              style={{ width: "100%", maxWidth: 1000 }}
              className="w3-margin-top"
            />
            <p>
              <strong>Opening hours:</strong> everyday from 6am to 5pm.
            </p>
            <p>
              <strong>Address:</strong> 15 Adr street, 5015, NY
            </p>
          </div>
        </div>
        {/* top games section */}
        <div className="w3-container" id="menu">
          <div className="w3-content" style={{ maxWidth: 700 }}>
            <h5 className="w3-center w3-padding-48">
              <span className="w3-tag w3-wide">Current Top Games</span>
            </h5>

            <div id="Eat" className="w3-container menu w3-padding-48 w3-card">
              <h5>Bread Basket</h5>
              <p className="w3-text-grey">
                Assortment of fresh baked fruit breads and muffins 5.50
              </p>
              <br />

              <h5>Honey Almond Granola with Fruits</h5>
              <p className="w3-text-grey">
                Natural cereal of honey toasted oats, raisins, almonds and dates
                7.00
              </p>
              <br />

              <h5>Belgian Waffle</h5>
              <p className="w3-text-grey">
                Vanilla flavored batter with malted flour 7.50
              </p>
              <br />

              <h5>Scrambled eggs</h5>
              <p className="w3-text-grey">
                Scrambled eggs, roasted red pepper and garlic, with green onions
                7.50
              </p>
              <br />

              <h5>Blueberry Pancakes</h5>
              <p className="w3-text-grey">
                With syrup, butter and lots of berries 8.50
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
