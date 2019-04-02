# project3

# GameAdvisor

## Goal
The goal of this project is to help parents understand video game ratings and screen content for their children. We are hoping to make this as user friendly and easy to understand as possible.

## MVP
* Easy to use, video games for dummies format.
* Upon entering a game title the user will see the game information and box art as well as links to live 'twitch video' of the actual game.
* The user will also recieve the 'ESRB' ~~and 'commonsensemedia'~~ ratings for each game. 
* ~~These ratings include for example any sexual content or excessive violence.~~
* Links to twitch streams of the searched game will be displayed as thumnails
  * clicking on the thumbnail pops up a modal with the video
* User accounts
  * Allow users to log in and wishlist games

## Technologies used
* Node and Express web server
* Mongo database using mongoose to connect from our server

* Twitch API
  * Game being played link
* GiantBomb API
  * game summary
  * box art
  * ESRB rating
* ~~CommonSenseMedia API~~
  * ~~CommonSenseMedia Ratings~~
* Pull certain info from the IGDB api to make the information more robust
  * Summary
  * Metacritic rating

  
* React for rendering the site
* Heroku for site deployment
* W3.CSS - W3 schools css framework

## Mock ups
[Mock up and prototype can be viewed here](https://xd.adobe.com/view/fae3345a-eff7-493a-71d4-c97620cdf00e-8cd2/)

## Future dev
* past searches link
* Create a user review rating system
* Chat feature for logged in users
* Purchase games through the website (not just links)


#### For help and support
Contact Sarah, Tiffany, Bob, or Paul

Project created and maintained by Sarah, Tiffany, Bob, or Paul

### current breakdown
* Sarah and Tiffany - backend working on the Mongo DB and API connections
* Paul - passport and frontend
* Bob - Frontend and help in other areas