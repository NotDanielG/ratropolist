import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className = "about-page">
        {/* <p>This is the About page!</p> */}
        <div className = "about-information">
          <div className = "p-tags">
            <p>This site is not an official site of <a className = "official-links" href="http://casselgames.com/">Cassel Games</a>. All ingame artwork is property of Cassel Games and is used with their permission.
            Steam link for <a className = "official-links"href = "https://store.steampowered.com/app/1108370/Ratropolis/">Ratropolis. </a></p>
            
            <p>The site has two primary functions. The first primary function is to serve as a resource for Ratropolis related material. The second is to familiarize myself with ReactJS and working with Node modules. All code is public <a className ="official-links" href = "https://github.com/NotDanielG/Ratropolist">here.</a></p>
            <p>This site has a card list of all cards in Ratropolis, a basic guide to get to round 30, and viable builds for economy and military.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
