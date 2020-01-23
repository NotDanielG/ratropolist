import React, { Component } from 'react';
import './MechanicList.css'
import Mechanic from './Mechanic'


class MechanicList extends Component{
    render(){
        let type_list = ["Active","Labor","Ephemeral","Rear Rank","Bounty","Tax","Hoard","Production","Single-Use","Soul","Soul Siphon","Soul Building"];
        let mech_list = [];
        for(var i = 0; i < type_list.length; i++){
            // console.log(mech);
            mech_list.push(<Mechanic handler = {this.props.handler} mechanic={type_list[i]}/>);
        }

        return <div className = "mechanic-list">
            {mech_list}
        </div>;
    }
}
export default MechanicList;