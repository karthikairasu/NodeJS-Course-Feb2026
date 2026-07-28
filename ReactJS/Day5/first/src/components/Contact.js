import React, { Component } from 'react'

export default class Property extends Component {
  render() {
    return (
      <div>
        <h1>this is my Property Component </h1>
        <h2>Name: {this.props.name}</h2>
        <h2>Age: {this.props.age}</h2>
        <h2>City: {this.props.city}</h2></div>
    )
  }
}
