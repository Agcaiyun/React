import React, { Component, Fragment } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        console.log(`You clicked ${this.state.count} times`)
    }

    componentDidUpdate() {
        console.log(`You clicked ${this.state.count} times`)
    }

    handleClick() {
        // this.setState({
        //     count: this.state.count + 1
        // })
        this.setState(state => ({
            count: state.count + 1
        }))
    }

    render() {
        return (
            <Fragment>
                <p>
                    {
                        `You clicked ${this.state.count} times`
                    }
                </p>

                <button onClick={this.handleClick}>
                    {
                        'Click me'
                    }
                </button>
            </Fragment>
        )
    }
}