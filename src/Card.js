import React, { Component } from 'react';

class Card extends Component{
    render(){
        // let classToApply = this.props.product.selected? "selected": "";
        let source = this.props.card.source;
        // alert(source);
        return <img src={require(""+source)} alt ={this.props.card.source}/>
    }
}
export default Card;