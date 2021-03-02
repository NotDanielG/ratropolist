import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className = "about-page">
        <div className = "about-information">
          <div className = "p-tags">
            <p>This site is not an official site of <a className = "official-links" href="http://casselgames.com/">Cassel Games</a>. All ingame artwork is property of Cassel Games and is used with their permission.
            Steam link for <a className = "official-links"href = "https://store.steampowered.com/app/1108370/Ratropolis/">Ratropolis. </a></p>
            
            <p>The site uses material from the Ratropolis wiki at <a className = "official-links" href="https://ratropolis.fandom.com/wiki/Ratropolis_Wiki">Fandom.</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
