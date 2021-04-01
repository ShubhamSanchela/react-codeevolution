import React, { Component } from 'react'

export default class RegularCom extends Component {
    render() {
        console.log("Regular Component Rendered")
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}
