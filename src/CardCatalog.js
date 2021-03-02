import React, { Component } from 'react';
import CardList from './CardList';
import './CardCatalog.css';
import MechanicList from './MechanicList';
import TypeList from './TypeList';
import Section from './Section';


class CardCatalog extends Component{
    constructor(){
        super();
        this.state = {cards: []};
        this.mechanic_filter = [];
        this.type_filter = [];
        this.filter = "";
        fetch("card_data.json")
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
    typeChangeHandler = (toggle, type) => {
        if(toggle){
            this.type_filter.push(type);
        }
        else{
            var idx = this.type_filter.indexOf(type);
            this.type_filter.splice(idx, 1);
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
            filteredList = data;

            for(var i = filteredList.length -1; i >= 0; i--){ //mechanics list
                for(var j = 0; j < this.mechanic_filter.length; j++){
                    if(!this.tagsIncluded(filteredList[i], this.mechanic_filter[j])){
                        filteredList.splice(i, 1);
                        j = this.mechanic_filter.length;
                    }
                }
            }

            for(i = filteredList.length-1; i >= 0; i--){ //card type
                if(this.type_filter.length > 0){
                    if(!this.typeIncluded(filteredList[i])){
                        filteredList.splice(i, 1);
                    }
                }
            }
            for(i = filteredList.length-1; i >= 0; i--){ //Keyword
                if(!(filteredList[i]["type"].toLowerCase().includes(filter.toLowerCase()) ||filteredList[i]["name"].toLowerCase().includes(filter.toLowerCase()) || 
                filteredList[i]["rarity"].toLowerCase().includes(filter.toLowerCase()) || filteredList[i]["effect"].toLowerCase().includes(filter.toLowerCase()))){
                    filteredList.splice(i, 1);
                }
            }
        })
        
        this.setState({cards: filteredList});
    }
    typeIncluded(element){
        for(var i = 0; i < this.type_filter.length; i++){
            if(this.type_filter[i] === element["type"]){
                return true;
            }
        }
        return false;
    }
    tagsIncluded(card, filter){
        if(card["effect"].toLowerCase().includes(filter.toLowerCase())){
            return true;
        }
        return false;
    }
    async getInfo(){
        var res = await fetch("card_data.json");
        return res.json();
    }
    render(){
        return <div>
            <div className = "leftcol-list">
                <div className = "leftside-list">
                    <CardList cards = {this.state.cards}/>
                </div>
            </div>
            <div className = "rightcol-list-container">
                <div className = "rightcol-list">
                    <div className = "rightside-list">
                        <p className = "search-title">Search Filters</p>
                        <form>
                            <Section title = "Keyword"/>
                            <div className = "input-div"><input className = "searchbar" type = "text" name = "filter" onKeyPress={this.textChangeHandler}/></div><br/>
                            <Section title = "Card Type"/>
                            <TypeList handler = {this.typeChangeHandler}/><br/>
                            <Section title = "Mechanic"/>
                            <MechanicList handler = {this.mechanicChangeHandler}/>

                        </form>
                    </div>
                </div>
            </div>
        </div>;
    }
}
export default CardCatalog;