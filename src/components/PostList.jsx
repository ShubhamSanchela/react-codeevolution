import React, { Component } from 'react'
import axios, * as others from 'axios';
export default class PostList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts : []
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            console.log(response)
        })
        .cathch(error => {
            console.log(error )
        })
    }
    

    render() {
        return (
            <div>
                Post Lists
            </div>
        )
    }
}
