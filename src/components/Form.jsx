import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username : "",
             comments : "",
             topic : "react"
        }
    }
    
    handleChange = (event) => {
        this.setState({
            username : event.target.value
        })
    }

    handleCommentsChnage = (event) => {
        this.setState({
            comments : event.target.value
        })
    }

    handleTopicsChange = (event) => {
        this.setState({
            topic : event.target.value
        })
    }

    handleSubmit = (event) => {
        alert( ` ${this.state.username} ${this.state.comments} ${this.state.topic} `);
        event.preventDefault();
    }

    render() {

        const {username, comments, topic} = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input 
                    type="text" 
                    value={username}
                    onChange ={this.handleChange}
                    />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea name="" id="" cols="20" rows="3" value={comments} onChange={this.handleCommentsChnage}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopicsChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}
