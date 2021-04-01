import React, { Component } from 'react'

 class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             value : 0
        }
    }
    
    handleClick = () => {
        this.setState({
         value : this.state.value + 1
        }, () => {
            console.log("Call back Value :" , this.state.value)
        })
        console.log(this.state.value);
    }

    render() {
        return (
            <div>
                <h3>Count : {this.state.value}</h3>
                <button onClick={this.handleClick}>Counter Increment</button>
            </div>
        )
    }
}
export default Counter;