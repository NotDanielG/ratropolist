import React, { Component } from 'react';
import './Mechanic.css'

class Mechanic extends Component{
    constructor(){
        super();
        this.toggle = false;
    }
    handleClick = (event) => {
        if(!this.toggle){
            event.target.style.backgroundColor = '#373737';
            this.toggle = true;
            this.props.handler(true, this.props.mechanic);
        }
        else{
            event.target.style.backgroundColor = '#222';
            this.toggle = false;
            this.props.handler(false, this.props.mechanic);
        }
    }
    render(){
        // return <div className = "mechanic" onClick = {() => this.props.handler(this.props.mechanic)}> 
        //     {this.props.mechanic}
        // </div>;
        return <div className = "mechanic" onClick ={this.handleClick}> 
            {this.props.mechanic}
        </div>;
    }
}
export default Mechanic;