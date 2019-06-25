import React, { Component } from 'react'

export default class TodoListUI extends Component {
    render() {
        const { inputValue, list, handleInputChange, submit, deleteItem } = this.props

        return (
            <div>
                <input
                    placeholder='to do1'
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button
                    type='button'
                    onClick={submit}
                >
                    {`submit`}
                </button>
                <ul>
                    {
                        list.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => deleteItem(index)}
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
}