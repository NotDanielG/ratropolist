import React, { Component } from 'react';
import CardList from './CardList';
import './CardCatalog.css';
import Select from "react-select";

const options = [
    { value: 'Action', label: 'Action' },
    { value: 'Hoard', label: 'Hoard' },
    { value: 'Labor', label: 'Labor' }
]

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
    action(){
        alert("hello");
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
                            <div className ="mechanics-list">  {/*Make into class  */}
                                <div className="mechanic">Active</div>
                                <div className="mechanic">Rear Rank</div>
                                <div className="mechanic">Bounty</div>
                                <div className="mechanic">Tax</div>
                                <div className="mechanic">Hoard</div>
                                <div className="mechanic">Soul</div>
                                <div className="mechanic">Soul Siphon</div>
                                <div className="mechanic">Soul Building</div>
                                <div className="mechanic">Single-Use</div>
                                <div className="mechanic">Production</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>;
    }
}
export default CardCatalog;