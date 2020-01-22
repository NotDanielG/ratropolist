import React, { Component } from 'react';
import CardList from './CardList';
import './CardCatalog.css';
import MechanicList from './MechanicList'


class CardCatalog extends Component{
    constructor(){
        super();
        this.state = {cards: []};
        this.mechanic_filter = [];
        this.filter = "";
        fetch("cards.json")
            .then(response => response.json())
            .then(json => {this.setState({cards: json})})
            .catch(error => console.log(error));
    }
    textChangeHandler = (event) =>{
        let input = event.target.value;
        let name = event.target.name;
        console.log(name);
        if(event.key === "Enter"){
            event.preventDefault();
            if(this.checkInput(input)){
                let info = this.getInfo(); //Gets card collection
                this.setFilteredList(info, input); //Sets the card collection based on filter type
                this.filter = input;
                // this.tagsIncluded();
            }
        }
        
    }
    mechanicChangeHandler = (toggle, mechanic) =>{
        if(toggle){
            this.mechanic_filter.push(mechanic);
        }
        else{
            var idx = this.mechanic_filter.indexOf(mechanic);
            this.mechanic_filter.splice(idx, 1);
        }
        let info = this.getInfo();
        
        this.setFilteredList(info, this.filter);
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
            if(this.mechanic_filter.length !== 0){
                let subList = [];
                for(var i = 0; i < data.length; i++){
                    for(var j = 0; j < this.mechanic_filter.length; j++){
                        if(this.tagsIncluded(data[i]["tags"], this.mechanic_filter[j])){
                            subList.push(data[i]);
                        }
                    }
                }
                console.log(subList);
                for(i = 0; i < subList.length; i++){
                    if((subList[i]["type"].toLowerCase().includes(filter.toLowerCase()) ||subList[i]["name"].toLowerCase().includes(filter.toLowerCase()) || 
                    subList[i]["description"].toLowerCase().includes(filter.toLowerCase()) || subList[i]["class"].toLowerCase().includes(filter.toLowerCase()) ||
                    this.tagsIncluded(subList[i]["tags"], filter)) ){
                        filteredList.push(subList[i]);
                    }
                }
            }
            else{
                for(i = 0; i < data.length; i++){
                    if((data[i]["type"].toLowerCase().includes(filter.toLowerCase()) ||data[i]["name"].toLowerCase().includes(filter.toLowerCase()) || 
                    data[i]["description"].toLowerCase().includes(filter.toLowerCase()) || data[i]["class"].toLowerCase().includes(filter.toLowerCase()) ||
                    this.tagsIncluded(data[i]["tags"], filter)) ){
                        filteredList.push(data[i]);
                    }
                }
            }
        })
        
        this.setState({cards: filteredList});
    }
    tagsIncluded(tags, filter){
        for(var i = 0; i < tags.length; i++){
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
                        <p className = "search-title">Search</p>
                        <form>
                            <input className = "searchbar" type = "text" name = "filter" onKeyPress={this.textChangeHandler}/>
                            <MechanicList handler = {this.mechanicChangeHandler}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>;
    }
}
export default CardCatalog;