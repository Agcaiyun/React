import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';


class Computer extends Component {
    constructor() {
        super()
        this.state = {
            status: 'off',
            showContent: "显示器关了"
        }

    }

    handleChangeScreen() {
        this.setState({
            status: this.state.status === 'off' ? 'on' : 'off',
        }, () => {
            this.setState({
                showContent: this.state.status === 'on' ? "显示器亮了" : "显示器关了"
            })
        })
    }

    render() {
        return (

            <div>
                <Screen showContent={this.state.showContent} />

                <button
                    onClick={this.handleChangeScreen.bind(this)}
                >
                    开关
          </button>
            </div>
        )
    }
}

class Screen extends Component {

    static defaultProps = {
        showContent: "无内容"
    }

    render() {
        return (
            <div className='screen'>
                {this.props.showContent}
            </div>

        )
    }
}



ReactDOM.render(
    <Computer />,
    document.getElementById('root')
)

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
