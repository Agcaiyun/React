import React, { Component } from 'react'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 'sss',
            list: [1, 2, 3, 4]
        }
    }

    render() {
        const { inputValue, list } = this.state

        return (
            <div>
                <input placeholder='to do' value={inputValue} />
                <ul>
                    {
                        list.map(item => {
                            return (
                                <li>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}