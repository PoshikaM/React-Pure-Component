import { PureComponent } from "react";

class PureCounter extends PureComponent{
    constructor(){
        super()

        this.state = {
            count : 0,
            toggle : false
        }
    }

    handletoggle = () => {
        this.setState({...this.state, toggle : !this.state.toggle})
        // console.log(!this.state.toggle)
    }

    counterIncrease = () => {
        if(this.state.toggle == true){
            this.setState({...this.state, count : this.state.count + 1})
        }
    }

    render(){
        console.log('This is Pure Component')
        return(
            <div>
                <div>
                    <h1>Pure Component</h1>
                    <h3>{this.state.count}</h3>
                </div>
                <div>
                    <button onClick={this.handletoggle}>Set Toggle</button>
                    <button onClick={this.counterIncrease}>Counter</button>
                </div>
            </div>
        )
    }
}

export default PureCounter