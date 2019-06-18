import React, { Component } from 'react';

export default class extends Component {
    constructor({ props }) {
        super(props);
        this.props = props

        this.state = {
            value: '1232222'
        }
    }

    render() {
        const { value } = this.state

        return (
            <div>
                <div>
                    {value}
                </div>
            </div>
        );
    }

    handleChange() {
        this.setState({})
    }
}
