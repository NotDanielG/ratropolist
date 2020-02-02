import React, { Component } from 'react';
import './Economy.css';

class Economy extends Component {
  render() {
    return (
      <div className = "economy-page">
        <div className = "economy-information">
            <div className ="p-tags">
                <div className="titles">Tax Build</div>
                <p>Tax Builds revolve around using tax cards, which are Raise Tax, Lottery and Collect. I find that Raise Taxes is the most consistent because you can stack the effects. Collect is also a good card because even if income is blocked, that only applies for the passive income you get from taxes and not from economy cards. A combination of Raise Taxes and Collect is a good enough combo. Make sure you have a lot of houses and a tax office to have a high base tax. A side effect going this path is a high population for more soldiers.</p>
                <img className = "economy-image" src={require("./resources/raise_tax.png")} alt ={""}/>
                <img className = "economy-image" src={require("./resources/lottery.png")} alt ={""}/>
                <img className = "economy-image" src={require("./resources/collect.png")} alt ={""}/> 
                <br/><div className = "line-divider"></div>

                <div className="titles">Mining Build</div>
                <p>Mining can easily ramp up if you are able to use it often, even better if you have two copies of it. This path scales slowly so you should get this card early or get multiple copies.</p>
                <img className = "economy-image" src={require("./resources/mining.png")} alt ={""}/>
                <br/><div className = "line-divider"></div>

                <div className="titles">Skill Build</div>
                <p>What if I tell you there's a way to play skills while also earning money? Well Experiments is the card for you! You need a draw mechanic card like two Dices or two Assistances. In an ideal environment you have no cards left to draw in your bag or discard pile. The play order is Experiments, your card draw mechanic, Experiments and so on. You can stack the Experiments effect and you can use other skills inbetween as well. You can start off with the Scientist leader in order to get Experiments right away.</p>
                <img className = "economy-image" src={require("./resources/experiments.png")} alt ={""}/>
                <img className = "economy-image" src={require("./resources/dice.png")} alt ={""}/>
                <img className = "economy-image" src={require("./resources/assistance.png")} alt ={""}/>
                <br/><div className = "line-divider"></div>

                <div className="titles">Bounty Build</div>
                <p>Primarily done with Bounty Hunt. You need a card draw mechanic so you can stack its effect. You are reliant on enemy spawns for money so it is quite risky as you do not have any other income. However, having a Tannery is cheap way to earn a little more money early on.</p>
                <img className = "economy-image" src={require("./resources/bounty_hunt.png")} alt ={""}/>
                <img className = "economy-image" src={require("./resources/tannery.png")} alt ={""}/>
                <br/><div className = "line-divider"></div>

                <div className="titles">Farm Build</div>
                <p>A farm build revolves around having multiple farms and granaries. This method means you do not have to play economy cards, but requires a lot of building space and requiring you to click the farm notification. Granaries are able to stack on top of one another, so ensure to get multiple of them. This is a late game economy, probably more used in Nightmare mode.</p>
                <img className = "economy-image" src={require("./resources/farm.png")} alt ={""}/>
                <img className = "economy-image" src={require("./resources/granary.png")} alt ={""}/>
                <br/><div className = "line-divider"></div>

                <div className="titles">Cheese Build</div>
                <p>Worst economy to rely on. It's okay to have very early on but you want to phase these cards out to transition to a better economy type. Cheese Market is an okay card to pick up early on.</p>
                <img className = "economy-image" src={require("./resources/cheese.png")} alt ={""}/>
                <img className = "economy-image" src={require("./resources/cheese_market.png")} alt ={""}/>
                <br/><div className = "line-divider"></div>

                <div className="titles">Disclaimer</div>
                <p>These are possible economy builds that I have used, seen or read. This does not mean there are others you can experiment with.</p>
                <br/>
            </div>
        </div>
      </div>
    );
  }
}

export default Economy;