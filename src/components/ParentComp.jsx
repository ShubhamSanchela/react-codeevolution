import React, { Component } from 'react'
import Memo from './Memo'
import PureComp from './PureComponent'
import RegularCom from './RegularCom'

class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : "Shubham"
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name : "Shubham"
            })
        }, 4000)
    }

    render() {
        console.log("****Parent Compoennt Render****")
        return (
            <div>
             Parent Component
             <Memo name={this.state.name} />  
             {/* <RegularCom name = {this.state.name} />
             <PureComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp
