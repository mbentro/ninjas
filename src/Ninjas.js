import React, { Component } from 'react';

class Ninjas extends Component{
    render(){
        //Destructuring
        //create variables { , , } which store the same name values from props, need to be same name
        const { name, age, belt } = this.props;
        return(
            <div className="ninja">
                <div>Name: { name }</div>
                <div>Age: { age }</div>
                <div>Belt: { belt }</div>
            </div>
        )
    }
}

export default Ninjas;