import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component{
    render(){
        let cards_list = [];
        for(let card of this.props.cards){
            cards_list.push(<Card card={card}/>);
        }
    return <div>{cards_list}</div>;
    }
}
export default CardList;