import React, {Component} from 'react'
class App extends Component {
    render() {
        return (
            <div>
                <div>
                    { this.props.value }
                </div>
                <div>
                    <button onClick={this.props.inc}> Inc </button>
                    <button onClick={this.props.dsc}> Dec </button>
                </div>
            </div>
        )
    }
}
export default App