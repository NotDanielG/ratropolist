import React, { Component } from 'react';
import CardList from './CardList';
import './CardCatalog.css';

class CardCatalog extends Component{
    constructor(){
        super();
        this.state = {cards: []};
        
        fetch("cards.json")
            .then(response => response.json())
            .then(json => {this.setState({cards: json})})
            .catch(error => console.log(error));
    }
    textChangeHandler = (event) =>{
        // this.setState();
        if(event.key === "Enter"){
            event.preventDefault();
            let filter = event.target.value;
            console.log("Key: ",event.key);
            console.log("Filter:", filter);

            let info = this.getInfo();
            let filteredList = this.getFilteredList(info, filter);
            console.log(this.state.cards);
            filteredList.then(data => {this.setState({cards: data})})
                        .catch(error => console.log(error));
            // this.setState({cards: filteredList});
        }
        
    }
    async getFilteredList(info, filter){
        let filteredList = [];
        await info.then(function(data){
            for(var i = 0; i < data.length; i++){
                if(data[i]["name"].toLowerCase().includes(filter.toLowerCase()) || data[i]["description"].toLowerCase().includes(filter.toLowerCase()) || data[i]["class"].toLowerCase().includes(filter.toLowerCase())){
                    filteredList.push(data[i]);
                }
            }
        })
        return filteredList;
    }
    async getInfo(){
        var res = await fetch("cards.json");
        return res.json();
        
    }
    render(){
        return <div>
            <div className = "leftcol-list">
                <div className = "leftside-list">
                    <h2>Card Catalog</h2>
                    <CardList cards = {this.state.cards}/>
                </div>
            </div>
            <div className = "rightcol-list">
                <div className = "rightside-list">
                    <form>
                        <p>Search</p>
                        <input type = "text"
                        onKeyPress={this.textChangeHandler}/>;
                    </form>
                </div>
            </div>
        </div>;
    }
}
export default CardCatalog;