import { Component } from "react";

class SimpleCounter extends Component{
    constructor(){
        super()

        this.state = {
            count : 0,
            toggle : false
        }
    }

    handleToggle = () => {
        this.setState({...this.state, toggle : !this.state.toggle})
        // console.log(!this.state.toggle)
    }

    countIncrease = () => {
        if(this.state.toggle == true){
            this.setState({...this.state, count : this.state.count+1})
        }
    }

    render(){
        console.log('This is Simple Component')
        return (
            <div>
                <div>
                    <h1>Simple Component</h1>
                    <h3>{this.state.count}</h3>
                </div>
                <div>
                    <button onClick={this.handleToggle}>Set Toggle</button>
                    <button onClick={this.countIncrease}>Counter</button>
                </div>
            </div>
        )
    }
}

export default SimpleCounter;