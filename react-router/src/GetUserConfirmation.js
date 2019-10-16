import React, { Component } from 'react'
import { Prompt } from 'react-router'
import { BrowserRouter, Link } from 'react-router-dom';

export default class GetUserConfirmation extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        isWhen: false
    }

    render() {
        return <Prompt
            when={true}
            message="Are you sure you want to leave?"
        />
    }

    onChangeWhenState() {
        this.setState({
            isWhen: true
        })
    }
}