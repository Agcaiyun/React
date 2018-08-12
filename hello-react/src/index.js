import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import CommentApp from './CommentApp';
import registerServiceWorker from './registerServiceWorker';
class Clock extends Component {
    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }

    componentWillMount () {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }

    render () {
        return (
            <div>
                <h1>
                    <p>
                        现在的时间是：
                    </p>
                    {
                        this.state.date.toLocaleTimeString()
                    }
                </h1>
            </div>
        )
    }
}

class Index extends Component {
    render () {
        return (
            <div>
                <Clock />
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);

registerServiceWorker();
