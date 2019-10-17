import React, { Component } from 'react'
import { Prompt } from 'react-router'
import { BrowserRouter, Link } from 'react-router-dom';

export default class ForceRefresh extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        isRefresh: false
    }

    render() {
        return (
            <BrowserRouter
                forceRefresh={this.state.isRefresh}
            >
                <button
                    type="button"
                    onClick={() => { this.handleRefresh() }}
                >
                    Refresh
                    </button>
            </BrowserRouter>
        )
    }

    handleRefresh() {
        this.setState({
            isRefresh: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    isRefresh: false
                })
            }, 3000)
        })
    }
}