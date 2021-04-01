import React, { Component } from 'react'

export default class Message extends Component {

    constructor() {
        super() 
        this.state = {
            message : "Hello Visitor"
        }
    }

    handleState = () => {
        this.setState({ message : "Thanks For Subscribe!!" })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.handleState}>Subscribe</button>
            </div>
        )
    }
}
