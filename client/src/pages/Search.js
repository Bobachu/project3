import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";


class Search extends Component {
  state = {
    title: "",
    cover: "",
    overview: "",
    ageRating: "",
    twitchData: [],
  };

  // When this component mounts, grab the book with the _id of this.props.match.params.id
  componentDidMount() {

    API.searchGame()
      .then(res => this.setState(
        {
          title: res.data.results[0].name,
          cover: res.data.results[0].image.small_url,
          overview: res.data.results[0].deck,
          ageRating: res.data.results[0].original_game_rating[0].name
        }
      ))
      .catch(err => console.log(err));

    API.searchTwitch()
      .then(res => {
        let data = [];
        res.data.streams.forEach(elem => {
          data.push({
            link: elem.channel.url,
            preview: elem.preview.medium
          })
        })
        console.log(data);
        this.setState({
          twitchData: data
        });
      })
      .catch(err => console.log(err));

  };

  render() {
    return (

      <div className="w3-container w3-margin">
        <br /><br />

        <div className="w3-row">
          <div className="w3-col w3-container m8 l8" id="gameInfo">
            <div className="w3-row">
              <h2><b>{this.state.title}</b></h2>
            </div>
            <div className="w3-row">
              <div className="w3-col game-image">
                <img src={this.state.cover} alt="game" width="275" height="365" />
              </div>
              <div className="w3-col game-desc">
                <h4><b>Overview</b></h4>
                <p>{this.state.overview}</p>

                {/* <p><b>Genres: </b>{this.state.genres}</p> */}

              </div>
            </div>
          </div>
          <div className="w3-col w3-container m4 l4" id="rating">
            {/* Age Rating HERE */}
            {this.state.ageRating}
            {/* <img id="age-rating-img" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/ratings/6/63/ESRB-ver2013_E.png?width=325" alt="age rating" width="75" height="110" /> */}

            <h2 className="header-2 w3-center m3">REVIEWS</h2>
            <table id="game-reviews" className="w3-table">
              {/* Game reviews HERE */}
              <tr>
                <th className="w3-center">Metacritic</th>
                <th className="w3-center">IGN</th>
                <th className="w3-center">GameStop</th>
              </tr>
              <tr>
                <td className="w3-center">N/A</td>
                <td className="w3-center">N/A</td>
                <td className="w3-center">N/A</td>
              </tr>
            </table>
          </div>
        </div>

        <div className="w3-row">
          <h2 className="header-2 w3-center m3">SEE THE GAME IN ACTION</h2>
          <div className="w3-col m12 w3-center" id="twitch">
            {this.state.twitchData.map(twitch => (
              <a href={twitch.link} target="_blank"><img className="twitch-preview" src={twitch.preview} alt="Twitch Stream Preview" /></a>
            ))}
          </div>
        </div>

        {/* Future Dev: Purchase Links Below */}
        {/* <div className="w3-row">
          <h2 className="header-2 w3-center m3">PURCHASE AT</h2>
          <div className="w3-col m12 w3-center" id="purchase">
          </div>
        </div> */}

      </div>
    );
  }
}

export default Search;
