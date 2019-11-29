import React, { Component } from 'react';
import CardList from './CardList';

class CardCatalog extends Component{
    constructor(){
        super();
        this.state = {cards: []};

        fetch("cards.json")
            .then(response => response.json())
            .then(json => {this.setState({cards: json})})
            .catch(error => console.log(error));
    }
    render(){
        return <div>
            <h2>Card Catalog</h2>
            <CardList cards = {this.state.cards}/>
        
        </div>;
    }
}
export default CardCatalog;