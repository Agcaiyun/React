import React, { Component } from 'react';

export default class extends Component {
    constructor({ props }) {
        super(props);
        this.props = props

        this.state = {
            value: '123'
        }
    }

    render() {
        const { value } = this.state

        return (
            <div>
                {/* 
                    <div>
                        {value}
                    </div> 
                */}

                {
                    React.createElement('div', {}, `${value}`)
                }
            </div>
        );
    }

    handleChange() {
        this.setState({})
    }
}
