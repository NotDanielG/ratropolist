import React, { Component } from 'react';
import CardList from './CardList';
import './CardCatalog.css';

class CardCatalog extends Component{
    constructor(){
        super();
        this.state = {cards: [], filter: ""};
        
        fetch("cards.json")
            .then(response => response.json())
            .then(json => {this.setState({cards: json, filter: ""})})
            .catch(error => console.log(error));
    }
    textChangeHandler = (event) =>{
        // if(event.target.value.match("^[a-zA-Z ]*$") != null){
        //     console.log("AYA");
        // }
        let filter = event.target.value;
        let name = event.target.name;
        if(event.key === "Enter"){
            event.preventDefault();
            if(this.checkInput(filter)){
                let info = this.getInfo(); //Gets card collection
                this.setFilteredList(info, filter); //Sets the card collection based on filter type
                this.setState({[name]: filter});
                // this.tagsIncluded();
            }
        }
        
    }
    checkInput(term){
        if(term.match("^[a-zA-Z ]*$") != null){
            return true;
        }
        return false;
    }
    async setFilteredList(info, filter){
        let filteredList = [];
        
        await info.then((data) => {
            for(var i = 0; i < data.length; i++){
                if(data[i]["type"].toLowerCase().includes(filter.toLowerCase()) ||data[i]["name"].toLowerCase().includes(filter.toLowerCase()) || 
                   data[i]["description"].toLowerCase().includes(filter.toLowerCase()) || data[i]["class"].toLowerCase().includes(filter.toLowerCase()) ||
                   this.tagsIncluded(data[i]["tags"], filter)){
                    filteredList.push(data[i]);
                }
            }
        })
        this.setState({cards: filteredList});
    }
    tagsIncluded(tags, filter){
        for(var i = 0; i < tags.length; i++){
            console.log(tags[i], filter, tags[i].toLowerCase().includes(filter.toLowerCase()))
            if(tags[i].toLowerCase().includes(filter.toLowerCase())){
                return true;
            }
        }
        return false;
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
            <div className = "rightcol-list-container">
                <div className = "rightcol-list">
                    <div className = "rightside-list">
                        <form>
                            <p>Search</p>
                            <input type = "text"
                            name = "filter"
                            onKeyPress={this.textChangeHandler}/>;
                        </form>
                    </div>
                </div>
            </div>
        </div>;
    }
}
export default CardCatalog;