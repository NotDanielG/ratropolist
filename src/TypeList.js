import React, { Component } from 'react';
import './TypeList.css'
import Type from './Type'


class TypeList extends Component{
    render(){
        let type_list = ["Economy","Military","Skill","Building"];
        let mech_list = [];
        for(var i = 0; i < type_list.length; i++){
            mech_list.push(<Type key={type_list[i]} handler = {this.props.handler} type={type_list[i]}/>);
        }

        return <div className = "type-list">
            {mech_list}
        </div>;
    }
}
export default TypeList;