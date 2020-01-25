import React, { Component } from 'react';
import './Guide.css';

class Guide extends Component {
  render() {
    return (
      <div className = "guide-page">
        <div className = "guide-information">
            <div className ="p-tags">
                <div className = "titles">Starting Off</div>
                <p>For the first few minutes of the game, while the rerolls only cost 20, you want to constantly play Potter, Cheese, and Grain. Use the House Card so you can play Grain more often. A Militia is sufficient to hold the line for the first wave. By the time the merchant comes around, you should sit comfortably at 500-700 gold.
                  <div>
                    <img className = "guide-image" src={require("./resources/potter.png")} alt ={""}/>
                    <img className = "guide-image" src={require("./resources/cheese.png")} alt ={""}/>
                    <img className = "guide-image" src={require("./resources/grain.png")} alt ={""}/>
                  </div>
                </p> <br/> <div className = "line-divider"></div>

                <div className = "titles">Early Game - Rounds 1-10</div>
                <div>For the first few merchants, you should be looking for better sources of income. Potter, Cheese and Grain are great early on but they don't produce income fast enough. Some good cards to look out for early on:</div>
                <img className = "guide-image" src={require("./resources/mining.png")} alt ={""}/>
                <img className = "guide-image" src={require("./resources/livestock.png")} alt ={""}/>
                <img className = "guide-image" src={require("./resources/market.png")} alt ={""}/>
                <p>Mining's income is able to ramp up pretty quickly, especially if you are able to find 2 of them.</p>
                <p>Livestock is a faster version of Grain and Fruit at the cost of discarding 1 card. Remember to play the cards you want before you use this card, as well as sufficient Ratizens.</p>
                <p>Market allows you the option to look for cards when the merchant isn't giving you any luck. Remember that you are only able to buy one card at a time instead of eight.</p>
                <p>In terms of military, make sure to have some melee units for the jumper rats that appear for rounds 10 and below. You should pick a military card to focus by around round 15. Avoid the larger military cards like Exiled or Guardian. They look good at first but their stats are deceptive. The things they can do can be achieved by Shieldrats or Pikerats instead, whilst also having better damage per second.</p>
                <br/><div className = "line-divider"></div>
                
                <div className = "titles">Mid Game - Rounds 11-20</div>
                <p>These rounds are known for their anti-range resistances. Going heavy on range units is going to be difficult but not impossible, you need enough damage to get through their shields. You should be switching out of Militia at this point. Guards are already a great unit to keep if you plan on using them because they have a faster firing rate than the other range units, remember to upgrade to increase their health.</p>
                <p>At this point, you should be removing the weaker economic cards like Potter, Cheese and Grain once your financial situation has stabalized. Removing cards are essential so you can keep your deck small and are able to draw the cards you want faster.</p>
                <div>Some things you can try to get are Overturn, Barracks, or other building cards</div>
                <img className = "guide-image" src={require("./resources/overturn.png")} alt ={""}/>
                <img className = "guide-image" src={require("./resources/barracks.png")} alt ={""}/>
                <img className = "guide-image" src={require("./resources/monastery.png")} alt ={""}/>
                <img className = "guide-image" src={require("./resources/smithy.png")} alt ={""}/>
                <img className = "guide-image" src={require("./resources/warren.png")} alt ={""}/>
                
                <p>Overturn, especially upgraded, allows you to bypass the redraw function as long as you have a reasonably small deck.</p>
                <p>Remember how I said you want to focus your efforts on one military card? Well start to pad those stats on that card using the Barracks. You can also pick up production reduction cards to speed up this process like Labor Command.</p>
                <p>Monastery allows you to remove your deck of cards when you are do not receive the option to for the end of the round rewards.</p>
                <p>Like the Monastery, the Smithy allows you to upgrade your cards independent of the end of the round rewards.</p>
                <p>Warren is pretty good to increase your population, as long as you have production reducing cards. You can also use the Breed card if you want to increase population as well.</p>

                <br/><div className = "line-divider"></div>
                <div className = "titles">Late Game - Rounds 21-30</div>
                <p>The monsters at this stage will start to ramp up, with higher health and damage output. Pick out a Rally, and some defensive cards. You can pick out AOE spells like Air Strike or defensive buildings like Balista.</p>
                <img className = "guide-image" src={require("./resources/rally.png")} alt ={""}/>
                <img className = "guide-image" src={require("./resources/air_strike.png")} alt ={""}/>
                <img className = "guide-image" src={require("./resources/balista.png")} alt ={""}/> 
                <p>Rally is good for the round 30, since you can reposition your units to one side of the map. Be careful not to oversaturate one side too much if you are up against the spider boss.</p>
                <p>AOE spells are a great way to deal with enemies that will be stacking up against your defensive line. Be careful not to kill your own units with the spells.</p>
                <p>Balista is a good defensive building to have, able to knockback enemy units and dealing decent damaging.</p>
                <br/><div className = "line-divider"></div>

                <div className = "titles">Tips to Remember</div>
                <p>Learn to use hotkeys, they will increase the cards you play overall.</p>
                <p>If your melee units are gone, don't spawn more melee units to the meat grinder. Retreat your remaining units to a previous wall to buy more time, as the enemy break your outer walls.</p>
                <p>Buy Defensive Walls so that you don't run out of building space.</p>
                <p>Don't be afraid to pick the House option in order to increase your population.</p>
                <p>Don't be afraid to experiment. Every run you will get different cards to buy, so you have to adapt accordingly.</p>
                <p>Lastly, avoid Rough Work for the love of god, save yourself from carpal tunnel syndrome.</p>
                <br/>
            </div>
        </div>
      </div>
    );
  }
}

export default Guide;