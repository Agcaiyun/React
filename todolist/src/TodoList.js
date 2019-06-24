import React, { Component } from 'react'
import store from './store'
import { getInputChangeAction, getDeleteItemAction, getSubmitAction } from './store/actionCreators'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()

        this.handleInputChange = this.handleInputChange.bind(this)
        this.changeReactComponent = this.changeReactComponent.bind(this)
        this.submit = this.submit.bind(this)

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
                <button
                    type='button'
                    onClick={this.submit}
                >
                    {`submit`}
                </button>
                <ul>
                    {
                        list.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => this.deleteItem(index)}
                                >
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }

    submit() {
        const action = getSubmitAction()

        store.dispatch(action)
    }

    deleteItem(index) {
        const action = getDeleteItemAction(index)

        store.dispatch(action)
    }

    changeReactComponent() {
        this.setState(() => {
            return store.getState()
        })
    }
}