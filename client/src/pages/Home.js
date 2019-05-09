import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.css";
import { Input, FormBtn } from "../components/Form";
const axios = require("axios");

class Home extends Component {
  state = {
    title: "",
    backImg: "",
    table: []
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

  searchesGame = event => {
    console.log(this.state.title);
    event.preventDefault();
    this.props.history.push("/search/" + this.state.title);
    this.setState({ title: "" });
  };

  componentDidMount() {
    //axios get
    axios.get("api/gamerankings").then(res => {
      const tableData = res.data;
      this.setState({ table: tableData });
    });

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
          <div className="w3-display-middle w3-center">
            <span className="w3-text-white w3-wide w3-jumbo" id="logoText">
              GameAdvisor
            </span>
          </div>
        </header>
        {/* page info and search bar */}
        <div className="w3-container" id="about">
          <div className="w3-content" style={{ maxWidth: 1300 }}>
            <h5 className="w3-center w3-padding-32">
              <span className="w3-tag w3-wide heads w3-center header-2">
                ABOUT THE SITE
              </span>
            </h5>
            <p>
              Welcome to GameAdvisor! With this site we hope to provide a tool
              for parents to get all the information they need to choose what
              games to buy their children of all ages. Just enter a game name
              below or in the bar at the top of the screen and you can find out
              what the game is about, see the rating, and even see some videos
              of people actually playing the game. You can also scroll to the
              bottom of this page to see a current list of top games that you can
              check out as well!
            </p>
            <div className="w3-container">
              <form className="w3-center" onSubmit={this.searchesGame}>
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Game"
                  className="w3-round-large w3-half"
                  id="main-search"
                />
                <FormBtn
                  type="submit"
                  className="w3-quarter"
                  // style={{ marginLeft: 10 }}
                  onClick={this.searchesGame}
                  id="main-button"
                >
                  Search
                </FormBtn>
              </form>
            </div>
            <h5 className="w3-center w3-padding-32">
              <span className="w3-tag w3-wide heads w3-center header-2">
                DID YOU KNOW?
              </span>
            </h5>
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
                alt="comparison"
              />
              <p>
                <i>
                  You can also set parental controls on all modern consoles and
                  even a PC, click the button below for instructions for your
                  system.
                </i>
              </p>
            </div>
            <div className="w3-center w3-bar">
              <a
                href="https://www.esrb.org/about/parentalcontrol-switch.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w3-button w3-teal w3-ripple parent-button">
                  Nintendo Switch
                </button>
              </a>
              <a
                href="https://www.esrb.org/about/parentalcontrol-PlayStation.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w3-button w3-teal w3-ripple parent-button">
                  Playstation 4
                </button>
              </a>
              <a
                href="https://www.esrb.org/about/parentalcontrol-xbox.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w3-button w3-teal w3-ripple parent-button">
                  Xbox One
                </button>
              </a>
              <a
                href="https://www.esrb.org/about/parentalcontrol-WindowsPC.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w3-button w3-teal w3-ripple parent-button">
                  Windows PC
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* top games section */}
        <div className="w3-container w3-center" id="topGames">
          <div className="w3-content" style={{ maxWidth: 1300 }}>
            <h5 className="w3-padding-32 heads">
              <span className="w3-tag w3-wide header-2 ">CURRENT TOP GAMES</span>
            </h5>

            <div className=" w3-center w3-container menu w3-padding-48 w3-card w3-center">
              <table className="w3-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Last Month</th>
                    <th>Title</th>
                    <th>Publisher</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.table.length !== 0 &&
                    this.state.table.map(table => (
                      <tr key={table.rank}>
                        <td>{table.rank}</td>
                        <td>{table.rankLastMonth}</td>
                        <td>
                          <Link to={"/search/" + table.title.replace(/:/, "")}>
                            {table.title}
                          </Link>
                        </td>
                        <td>{table.publisher}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
