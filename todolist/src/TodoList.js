import React, { Component } from 'react'
import axios from 'axios'
import store from './store'
import { getInputChangeAction, getDeleteItemAction, getSubmitAction, initListAction } from './store/actionCreators'
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
        axios.get('https://www.easy-mock.com/mock/5d145a33673c6f47dd3d622d/example1/example#!method=get').then((res) => {
            const list = res.data.date
            store.dispatch(initListAction(list))
        }, () => {
            console.log('Error: TodoList ComponentWillMount')
        })
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