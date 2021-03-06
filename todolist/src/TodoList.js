import React, { Component } from 'react'
import store from './store'
import { getInputChangeAction, getDeleteItemAction, getSubmitAction, initList } from './store/actionCreators'
import TodoListUI from './TodoListUI'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()

        this.handleInputChange = this.handleInputChange.bind(this)
        this.changeReactComponent = this.changeReactComponent.bind(this)
        this.submit = this.submit.bind(this)
        this.deleteItem = this.deleteItem.bind(this)

        store.subscribe(this.changeReactComponent)
    }

    componentWillMount() {
        store.dispatch(initList())
    }

    render() {
        const { inputValue, list } = this.state

        return (
            <TodoListUI
                list={list}
                inputValue={inputValue}
                handleInputChange={this.handleInputChange}
                submit={this.submit}
                deleteItem={(index) => this.deleteItem(index)}
            />
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