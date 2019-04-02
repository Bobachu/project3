import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";
import Modal from "../components/Modal";
const axios = require("axios");

var pathArray = window.location.pathname.split("/");
console.log(pathArray);
class Search extends Component {
  state = {
    title: "",
    cover: "",
    overview: "",
    link: "",
    ageRating: [],
    twitchData: [],
    videoUrl: "",
    metacritic: "",
    esrbdata: []
  };

  // When this component mounts, grab the book with the _id of this.props.match.params.id
  componentDidMount() {
    var game = this.props.match.params.game;
    this.searchGameData(game);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.game !== prevProps.match.params.game) {
      var game = this.props.match.params.game;
      this.searchGameData(game);
    }
  }

  searchGameData = game => {
    API.searchGame(game)
      .then(res => {
        // If there is an age rating, add the age rating into ageRating.
        // if (Array.isArray(res.data.results[0].original_game_rating)) {
        //   let data = [];
        //   res.data.results[0].original_game_rating.forEach(elem => {
        //     data.push(elem.name);
        //   });

        //   this.setState({
        //     title: res.data.results[0].name,
        //     cover: res.data.results[0].image.small_url,
        //     // overview: res.data.results[0].deck,
        //     link: res.data.results[0].site_detail_url,
        //     // ageRating: data
        //   });
        //   // ELSE add the other information and leave ageRating blank.
        // } else {
          this.setState({
            title: res.data.results[0].name,
            cover: res.data.results[0].image.small_url,
            // overview: res.data.results[0].deck,
            link: res.data.results[0].site_detail_url
          });
        // }
      })
      .catch(err => console.log(err));

    API.searchIgdb(game)
      .then(res => {
        this.setState({
          metacritic: res.data[0].aggregated_rating.toFixed(2),
          overview: res.data[0].summary
        });
      })
      .catch(err => console.log(err));

    API.searchTwitch(game)
      .then(res => {
        let data = [];
        res.data.streams.forEach(elem => {
          data.push({
            link: elem.channel.url,
            preview: elem.preview.medium,
            channel:
              "https://player.twitch.tv/?channel=" + elem.channel.display_name
          });
        });
        this.setState({
          twitchData: data
        });
      })
      .catch(err => console.log(err));

    axios.get("/api/esrb/" + game).then(res => {
      const esrb = res.data;
      this.setState({ esrbdata: esrb });
    });
  };

  addToWishlist = () => {
    const title = this.state.title;
    const username = sessionStorage.getItem('user');    
    axios.post("/api/wishlists/add", {
      title,
      username
    }).then(console.log(title))
    .catch(err => console.log(err))
  };

  showModal = event => {
    event.preventDefault();
    const link = event.target.id;
    this.setState({ show: true, videoUrl: link });
  };

  hideModal = () => {
    this.setState({ show: false, videoUrl: "" });
  };

  render() {
    return (
      <div className="w3-container w3-margin" id="gameInfoContainer">
        <br />
        <br />
        <div className="w3-row">
          <div className="w3-col w3-container w3-twothird" id="gameInfo">
            <div className="w3-row">
              <h1>
                <b>{this.state.title}</b>
              </h1>
            </div>
            <div className="w3-row">
              <div className="w3-col game-image">
                <img
                  src={this.state.cover}
                  alt="game"
                  width="275"
                  height="365"
                />
              </div>
              <div className="w3-col game-desc">
                <h3 className="heads">Overview</h3>
                <p>{this.state.overview}</p>
                <a
                  href={this.state.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w3-button w3-round w3-black">
                    <i className="fas fa-info-circle" /> Get More Info
                  </button>
                </a>
                {/* <form action="/api/wishlists/add" method="post"> */}
                <button onClick={() => this.addToWishlist()}name="addWish" className="w3-button w3-round w3-teal">
                  <i className="far fa-list-alt" /> Add to Wishlist
                </button>
                {/* </form> */}

                {/* <p><b>Genres: </b>{this.state.genres}</p> */}
              </div>
            </div>
          </div>

          <div className="w3-col w3-container w3-third" id="rating">
            <h2 className="header-2 w3-center m3 heads">AGE RATING</h2>
            {/* Age Rating HERE */}
            {this.state.esrbdata[1] ? (
              <div>
                <img src={this.state.esrbdata[0]} alt="esrbimg" />
                <p>{this.state.esrbdata[1]}</p>
              </div>
            ) : (
              "ESRB is currently not available."
            )}


            <h2 className="header-2 w3-center m3 heads">METACRITIC SCORE</h2>
            {this.state.metacritic}
          </div>
        </div>

        <div className="w3-row">
          <h2 className="header-2 w3-center m3 heads">
            SEE THE GAME IN ACTION
          </h2>
          <div className="w3-col m12 w3-center" id="twitch">
            {this.state.twitchData.map(twitch => (
              <img
                className="twitch-preview"
                id={twitch.channel}
                src={twitch.preview}
                alt="Twitch Stream Preview"
                onClick={this.showModal}
                key={twitch.channel}
              />
            ))}
          </div>
        </div>
        <Modal
          show={this.state.show}
          handleClose={this.hideModal}
          id="videoModal"
        >
          <button
            className="w3-button w3-xlarge w3-hover-red w3-display-topright"
            onClick={this.hideModal}
          >
            X
          </button>
          <br />
          <br />
          <iframe title="twitch-embed" src={this.state.videoUrl} width="660" height="371" />
        </Modal>
        <div className="w3-row">
          <h2 className="header-2 w3-center m3">PURCHASE AT</h2>
          <div className="w3-col m12 w3-center" id="purchase">
            <a
              href={
                "https://www.gamestop.com/browse?nav=16k-3-" + this.state.title.replace(/\s|:/g, "+") + ",28zu0"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/gamestop.png"
                style={{ width: 400, height: 100 }}
                id="gamestop"
                alt="gasmestop logo"
              />
            </a>
            <br />
            <br />
            <a
              href={
                "https://www.walmart.com/search/?query=" +
                this.state.title +
                "&cat_id=2636"
              }
              target="_blank"
              rel="noopener noreferrer"

            >
              <img
                src="/images/walmart.jpg"
                style={{ width: 400, height: 100 }}
                id="walmart"
                alt="walmart logo"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
