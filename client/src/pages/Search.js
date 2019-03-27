import React, { Component } from "react";
import "./style.css";
// import { Link } from "react-router-dom";
import API from "../utils/API";


class Search extends Component {
  state = {
    game: ""
  };

  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {

    API.searchGame()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  //   API.getBook(this.props.match.params.id)
  //     .then(res => this.setState({ book: res.data }))
  //     .catch(err => console.log(err));

  API.searchTwitch()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (

      <div className="w3-container w3-margin">
        <br /><br />

        <div className="w3-row">
          <div className="w3-col w3-container m8 l8" id="gameInfo">
            <div className="w3-row">
              <h2><b>Game Title</b></h2>
            </div>
            <div className="w3-row">
              <div className="w3-col game-image">
                <img src="https://via.placeholder.com/225x300" alt="game" />
              </div>
              <div className="w3-col game-desc">
                <h4><b>Overview</b></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra vitae dolor eget consectetur. Donec sapien urna, eleifend id quam vel, porta congue orci. Nulla tincidunt arcu vel congue congue. Mauris semper sed tellus sit amet cursus. Vivamus vel massa sed arcu vehicula consectetur at sed mauris. Nulla facilisi. Aliquam condimentum lacinia eros, a fermentum mauris eleifend eget. Nunc a venenatis metus, eu maximus eros. Maecenas faucibus tortor sed pellentesque convallis. Vestibulum non tristique leo. Aenean et risus ac odio lobortis aliquam vel ac nulla. Mauris eget dolor scelerisque dui convallis tristique quis sit amet turpis.</p>
                <p><b>Genres: </b>Adventure, Action, Fantasy</p>
              </div>
            </div>
          </div>
          <div className="w3-col w3-container m4 l4" id="rating">
            {/* Age Rating HERE */}
            <img id="age-rating-img" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/ratings/6/63/ESRB-ver2013_E.png?width=325" alt="age rating" width="75" height="110" />

            <h2 className="header-2 w3-center m3">REVIEWS</h2>
            <table id="game-reviews" className="w3-table">
              {/* Game reviews HERE */}
              <tr>
                <th className="w3-center">Metacritic</th>
                <th className="w3-center">IGN</th>
                <th className="w3-center">GameStop</th>
              </tr>
              <tr>
                <td className="w3-center">72/100</td>
                <td className="w3-center">8/10</td>
                <td className="w3-center">7.5/10</td>
              </tr>
            </table>
          </div>
        </div>

        <div className="w3-row">
          <h2 className="header-2 w3-center m3">TWITCH STREAMS</h2>
          <div className="w3-col m12 w3-center" id="twitch">
          </div>
        </div>
        <div className="w3-row">
          <h2 className="header-2 w3-center m3">PURCHASE AT</h2>
          <div className="w3-col m12 w3-center" id="purchase">
          </div>
        </div>

      </div>
    );
  }
}

export default Search;
