import React, { Component, Fragment } from 'react';

export default class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <a href="#" onClick={(e) => this.handleClick(e)} >Click</a>
            </Fragment>
        )
    }

    handleClick(e) {
        e.preventDefault()
        console.log('click')
    }
}