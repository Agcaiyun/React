import React, { Component } from 'react'
import store from './store'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()

        this.handleInputChange = this.handleInputChange.bind(this)
        this.changeReactComponent = this.changeReactComponent.bind(this)

        store.subscribe(this.changeReactComponent)
    }

    render() {
        const { inputValue, list } = this.state

        return (
            <div>
                <input
                    placeholder='to do'
                    value={inputValue}
                    onChange={this.handleInputChange}
                />
                <ul>
                    {
                        list.map((item) => {
                            return (
                                <li>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    handleInputChange(e) {
        const action = {
            type: 'change-input-value',
            value: e.target.value
        }

        store.dispatch(action)
    }

    changeReactComponent() {
        const { inputValue, list } = store.getState()

        this.setState(() => {
            return {
                inputValue,
                list
            }
        })
    }
}