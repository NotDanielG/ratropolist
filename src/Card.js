import React, { Component } from 'react';
import './Card.css'
import Popup from "reactjs-popup";

class Card extends Component{
    render(){
        let source = this.props.card.source;
        return <Popup className = "popup" modal trigger ={<img className = "card" src={require(""+source)} alt ={this.props.card.source}/>}>
            <img src={require(""+source)} alt ={this.props.card.source}/>
        </Popup>
    }
}
export default Card;