import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";

class User extends Component {
  state = {
    user: "",
    bio: "",
    wishlist: [],
    gameTitles: []
  };

  componentDidMount() {
    let username = window.location.pathname.slice(6);
    this.loadUser(username);
  }

  loadUser = (username) => {
    API.loadUser(username)
      .then(res => this.setState({ user: res.data.username, bio: res.data.bio, wishlist: res.data.wishlist }))
      .catch(err => console.log(err));
  };

  removeGame = id => {
    // API.deleteWishlistItem(id)
    //   .then(res => this.loadWishlist())
    //   .catch(err => console.log(err));
    console.log("You Clicked the Trash Can!")
  };

  render() {
    return (
      <div className="w3-container">
        <div className="w3-row w3-padding-48 userHeading">
          <div className="w3-container w3-third pic-section">
            {/* User's profile picture */}
            <img className="profile-pic w3-circle" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJ6nY4Jb-8SFmi1iR4OnFIGzbMOdECbMKiKU4RqKltU4QY35S'} alt="profile" />
          </div>
          <div className="w3-container w3-twothird">
            {/* User's profile info */}
            <h1 className="bio-section">{this.state.user}</h1>
            {/* <h6>Joined: 03/20/19</h6>
            <h4>
              {this.state.bio.length ? this.state.bio : "Hello, welcome to my profile! This is my about me section. Below you can see my wishlist and searched games. Thanks for visiting!"}
            </h4>
            <h1>Username</h1> */}
            <h6>Joined: 03/20/19</h6>
            <h4>Hello, welcome! Below you can see your wishlist and previously searched games. Thanks for visiting!</h4>
          </div>
        </div>
        <div className="w3-row userItems">
          <div className="w3-container w3-twothird">
            <h2 className="w3-center header-2">WISHLIST</h2>
            <table class="w3-table w3-bordered">

              {/* Hard coded games in wishlist for preview */}
              {this.state.wishlist.map(game => {
                if (!this.state.wishlist.length === 0) {
                  return (
                      <h3>This user needs to add games to their wishlist!</h3>
                  )
                } else {
                return (
                  <tr>
                    <td className="title-table">{game}</td>
                    <td className="remove-table"><button class="trash-btn" onClick={this.removeGame}><i class="fas fa-trash-alt"></i></button></td>
                  </tr>
                )
                };
              })}
              {/* <tr>
                <td className="title-table">Mario Kart 8</td>
                <td className="remove-table"><button class="trash-btn" onClick={this.removeGame}><i class="fas fa-trash-alt"></i></button></td>
              </tr>
              <tr>
                <td className="title-table">Legend of Zelda</td>
                <td className="remove-table"><button class="trash-btn" onClick={this.removeGame}><i class="fas fa-trash-alt"></i></button></td>
              </tr>
              <tr>
                <td className="title-table">Rune Factory 5</td>
                <td className="remove-table"><button class="trash-btn" onClick={this.removeGame}><i class="fas fa-trash-alt"></i></button></td>
              </tr> */}

            </table>
          </div>
          <div className="w3-container w3-third">
            <h2 className="w3-center header-2">RECENTLY SEARCHED</h2>
            <ul class="w3-ul w3-hoverable">
              {/* Hard coded recently searched games */}
              <li>Yoshi's Crafted World</li>
              <li>Pokemon: Let's Go Eevee!</li>
              <li>Super Mario Party</li>

            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
