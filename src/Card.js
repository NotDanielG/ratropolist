import React, { Component } from 'react';
import './Card.css'

class Card extends Component{
    render(){
        let source = "./resources/" + this.props.card.name.toLowerCase()+".png";
        return <img className = "card" src={require(""+source)} alt ={""+source}/>
    }
}
export default Card;