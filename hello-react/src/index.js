import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import CommentApp from './CommentApp';
import registerServiceWorker from './registerServiceWorker';

class Input extends Component {
    constructor() {
        super()
        this.state = {
            originNumber: ''
        }
    }

    handleChangeInput(event) {
        this.setState({
            originNumber: event.target.value
        }, () => {
            if (this.props.onInput) {
                this.props.onInput(this.state.originNumber)
            }
        })
    }

    render() {
        return (
            <div>
                <input
                    type='number'
                    value={this.state.originNumber}
                    onChange={this.handleChangeInput.bind(this)}
                />
            </div>
        )
    }
}

class PercentageShower extends Component {
    render() {
        return (
            <div>
                {
                    this.props.onPresent
                }
            </div>
        )
    }
}


class PercentageApp extends Component {
    constructor() {
        super()
        this.state = {
            inputNumber: ''
        }
    }

    handleInput(originNumber) {
        this.setState({
            inputNumber: (originNumber * 100).toFixed(2).toString() + "%"
        })
    }

    render() {
        return (
            <div>
                <Input
                    onInput={this.handleInput.bind(this)}
                />
                <PercentageShower onPresent={this.state.inputNumber} />
            </div>
        )
    }
}


ReactDOM.render(
    <PercentageApp />,
    document.getElementById('root')
);

registerServiceWorker();
