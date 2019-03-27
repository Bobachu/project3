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
    title: "",
    backImg: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  randomImg = () => {
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    var imgName = "img_" + randomNumber + ".jpg";
    this.setState({ backImg: "url(/images/" + imgName + ")" });
    console.log(this.state.backImg);
  };

  componentDidMount() {
    this.randomImg();
  }

  render() {
    return (
      <div>
        <br />
        <br />
        {/* Header image and logo */}
        <header
          className="bgimg w3-display-container w3-grayscale-min"
          id="home"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: this.state.backImg,
            minHeight: 500
          }}
          onLoad={this.randomImg}
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
              Welcome to GameAdvisor! With this site we hope to provide a tool
              for parents to get all the information they need to choose what
              games to buy their children of all ages. Just enter a game name
              below and you can find out what the game is about, see the rating,
              and even see some videos of people actually playing the game.
            </p>
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Game"
            />
            <FormBtn style={{marginTop: 10}} onClick={this.searchesGame}>Search</FormBtn>
            <div className="w3-panel w3-leftbar w3-light-grey w3-center">
              <p>
                <i>
                  Game ratings are a lot like movie ratings, and can even be
                  almost directly compared. Below is an image that might help
                  out.
                </i>
              </p>
              <img
                src="/images/comparison.png"
                className="w3-margin-top"
                id="compare"
              />
            </div>
          </div>
        </div>
        {/* top games section */}
        <div className="w3-container" id="topGames">
          <div className="w3-content" style={{ maxWidth: 1300 }}>
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
