import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";

class User extends Component {
  state = {
    wishlist: [],
    title: "",
    user: "",
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  loadUser = () => {
    API.getUser()
      .then(res => this.setState(this.state.user = res.data))
      .catch(err => console.log(err));
  };

  loadWishlist = () => {
    API.getWishlist()
      .then(res =>
        this.setState({ wishlist: res.data, title: ""}))
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
          <div className="w3-col m4">
            {/* User's profile picture */}
            <img className="profile-pic w3-circle" src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'} alt="profile" />
          </div>
          <div className="w3-col m8">
            {/* User's profile info */}
            <h1>Username</h1>
            <h6>Joined: 03/20/19</h6>
            <h4>Hello, welcome to my profile! This is my about me section. Below you can see my wishlist and searched games. Thanks for visiting!</h4>
          </div>
        </div>
        <div className="w3-row userItems">
          <div className="w3-col m8">
            <h2 className="w3-center header-2">WISHLIST</h2>
            <table class="w3-table w3-bordered">

              {/* Hard coded games in wishlist for preview */}
              <tr>
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
              </tr>

            </table>
          </div>
          <div className="w3-col m4">
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
