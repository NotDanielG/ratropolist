import React, { Component } from 'react';
import './Type.css'

class Type extends Component{
    constructor(){
        super();
        // this.setState({toggle: false});
        this.toggle = false;
        /*#222 or #2b2b2b*/
    }
    handleClick = (event) => {
        if(!this.toggle){
            event.target.style.backgroundColor = '#373737';
            this.toggle = true;
            this.props.handler(true, this.props.type);
        }
        else{
            event.target.style.backgroundColor = '#222';
            this.toggle = false;
            this.props.handler(false, this.props.type);
        }
    }
    render(){
        return <div className = "type" onClick ={this.handleClick}> 
            {this.props.type}
        </div>;
    }
}
export default Type;