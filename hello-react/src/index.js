import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import CommentApp from './CommentApp';
import registerServiceWorker from './registerServiceWorker';

class Header extends Component {
    constructor() {
        super()
        console.log('construct')
    }

    componentWillMount() {
        console.log('component will mount')
    }

    componentDidMount() {
        console.log('component did mount')
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1 className='title'>React 小书</h1>
            </div>
        )
    }
}

class Index extends Component {
    constructor() {
        super()
        this.state = {
            isShowHeader: true
        }
    }

    handleShowOrHide() {
        this.setState({

        })
    }
}

ReactDOM.render(
    <Header />,
    document.getElementById('root')
);

registerServiceWorker();
