import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";

class User extends Component {
  state = {
    user: "",
    wishlist: [],
    gotTitles: false,
    gameTitles: [],
  };

  componentDidMount() {
    let username = window.location.pathname.slice(6);
    this.loadUser(username);
  };

  loadUser = (username) => {
    API.loadUser(username)
      .then(res => this.setState({ user: res.data.username, wishlist: this.getTitlesFromID(res.data.wishlist) }))
      .catch(err => console.log(err));
  };

  getTitlesFromID = (idArr) => {
    let data = [];
    if (idArr.length > 0 && typeof API !== undefined) {
      idArr.forEach(elem => {
        API.getWishItem(elem)
          .then(res => {
            data.push(res.data.title);
            if (data.length > 0) {
              this.setState({gameTitles: data, gotTitles: true});
            }
          });
      });
    }
    console.log("Data: " + data);
    console.log(this.state.gameTitles);
  };

  // removeGame = (key) => {
  //   // API.deleteWishlistItem(id)
  //   //   .then(res => this.loadWishlist())
  //   //   .catch(err => console.log(err));
  //   console.log("You Clicked the Trash Can!")
  // };

  render() {
    console.log('render called');
    return (
      <>
      <div className="w3-container w3-center">
        <div className="w3-row w3-padding-48 userHeading">
          <div className="w3-container pic-section">
            {/* User's profile picture */}
            <img className="profile-pic w3-circle" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJ6nY4Jb-8SFmi1iR4OnFIGzbMOdECbMKiKU4RqKltU4QY35S'} alt="profile" />
          </div>
          <div className="w3-container w3-center">
            {/* User's profile info */}
            <h1 className="bio-section">{this.state.user}</h1>
            <h4>Hello and welcome! Below you can see your wishlist. Thanks for visiting!</h4>
          </div>
        </div>
        <div className="w3-row userItems">
          <div className="w3-container" id="wishlist">
            <h2 className="w3-center header-2">WISHLIST</h2>

            {this.state.gotTitles && this.state.gameTitles.length > 0 ?
              this.state.gameTitles.map((title, i) => {
                return (
                  <table className="w3-table w3-bordered">
                    <tbody>
                      <tr>
                        <td key={i} className="title-table">{title}</td>
                        {/* <td key={i} className="remove-table"><button className="trash-btn" onClick={this.removeGame}><i className="fas fa-trash-alt"></i></button></td> */}
                      </tr>
                    </tbody>
                  </table>
                )}):<div><h2>Loading Wishlist...</h2>
                  <p>(If this takes longer than 5 seconds then no games have been added to this person's wishlist)</p></div>}


          </div>
        </div>
      </div>
      </>
    );
  }
}


export default User;
