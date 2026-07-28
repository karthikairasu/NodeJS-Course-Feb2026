import React, { Component } from 'react'

export default class About extends Component {
    constructor(){
        super();
        this.state = {role:"Administrator"}
        this.state.city ={city:"Bangalore"}
    }
render() {
    return (
        <div>
            <h2>This is my About component</h2>
            <h4>About: {this.state.role}</h4>
            <button onClick={() => this.setState({role:     "Manager"})}>Change State</button>
            <h3 className="">{this.state.city.city}</h3>
            <button onClick={() => this.setState({city:{city:"Chennai"}})}>Change City</button>
        </div>

    )
    }
}
