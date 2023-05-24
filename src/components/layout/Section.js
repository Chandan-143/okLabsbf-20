import React, { Component } from 'react'

export default class Section extends Component {
  
    render() {
    return (
        <section className="col-8 tbdr h-100">{this.props.children}</section>
    )
  }
}