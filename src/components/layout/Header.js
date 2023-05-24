import React, { Component } from 'react'
import Nav from './Nav'

export default class Header extends Component {
    //1. Properties

    //2. Constructor


    //3. Methods
    render() {
        return (
            <header>
                <div className="container">
                    <Nav />
                </div>
            </header>
        )
    }
}