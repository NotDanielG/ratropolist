import React, { Component } from 'react';

class Section extends Component{
    render(){
    return <div className = "section"><p className="filter-title">{this.props.title}</p> <div className ="divider"></div></div>
    }
}
export default Section;