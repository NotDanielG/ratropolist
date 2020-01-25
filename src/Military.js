import React, { Component } from 'react';
import './Military.css';

class Military extends Component {
  render() {
    return (
      <div className = "military-page">
        <div className = "military-information">
          <div className = "p-tags">
            <div className="titles">Ratropolis Metropolis</div>
                <p>The old fashion situation, it revolves around having avaliable ratizens to have a large army of decent military units. This can apply to other strategies as well since you always want a large population of Ratizens and a large army.</p>
                <img className = "guide-image" src={require("./resources/breed.png")} alt ={""}/>
                <img className = "guide-image" src={require("./resources/warren.png")} alt ={""}/>
                <img className = "guide-image" src={require("./resources/guards.png")} alt ={""}/>
                <img className = "guide-image" src={require("./resources/shieldrat.png")} alt ={""}/>
                <img className = "guide-image" src={require("./resources/pikerat.png")} alt ={""}/>
                <img className = "guide-image" src={require("./resources/druid.png")} alt ={""}/>
            <br/>
            <div className = "line-divider"></div>

            <div className="titles">Super Soldier</div>
                <p>This strategy revolves around upgrading the stats of your cards such that they have insane stats. The primary way to do it is by using Barracks and production reduction cards. You can also do this with Royal Guard or D-rex so you can copy them with Taverns.</p>
                <img className = "guide-image" src={require("./resources/barracks.png")} alt ={""}/>
                <img className = "guide-image" src={require("./resources/labor_command.png")} alt ={""}/>
                <img className = "guide-image" src={require("./resources/visit.png")} alt ={""}/>
                <img className = "guide-image" src={require("./resources/d-rex.png")} alt ={""}/>
                <img className = "guide-image" src={require("./resources/royal_guard.png")} alt ={""}/>
                <img className = "guide-image" src={require("./resources/tavern.png")} alt ={""}/>
            <br/>
            <div className = "line-divider"></div>

            <div className="titles">Crossbows</div>
                <p>All this strategy needs is a large amount of crossbow rats and a beefy frontline. You should place your forces one or two walls away from the frontier. This allows for the enemy to pile up so that your crossbow rats can kill a bunch of mobs in one shot. Your melee units should be able to defend for enough time for your crossbows. An example of a strong frontline is Guardian and Medic combo in order to have beefy frontline. Or you can have a combination of pikerats and shamans in order to delay the enemy.</p>
                <img className = "guide-image" src={require("./resources/crossbowrat.png")} alt ={""}/>
                <img className = "guide-image" src={require("./resources/guardian.png")} alt ={""}/>
                <img className = "guide-image" src={require("./resources/medic.png")} alt ={""}/>
                <img className = "guide-image" src={require("./resources/druid.png")} alt ={""}/>
                <img className = "guide-image" src={require("./resources/pikerat.png")} alt ={""}/>
            <br/>
            <div className = "line-divider"></div>

            <div className="titles">Disclaimer</div>
                <p>As same as the economy page, you can always innovate new strategies. These strategies are not exclusive from one another and you should mix them together depending on your situation.</p>
          </div><br/>
        </div>
      </div>
    );
  }
}

export default Military;
