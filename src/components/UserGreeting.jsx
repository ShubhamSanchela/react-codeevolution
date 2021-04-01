import React, { Component } from 'react'

export default class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    

    render() {
       
            // return this.state.isLoggedIn ? <div>Welcome Shubham</div> : <div>Welcome User</div>

            return this.state.isLoggedIn && <div>Wel-Come Shubham</div>

            // if (this.state.isLoggedIn){
            //     return (
            //         <div>Welsome Shubham</div>
            //     )
            // } else {
            //     return(
            //         <div>Welcome User</div>
            //     )
            // }

        
       
    }
}
