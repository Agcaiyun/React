import React, { Component } from 'react'
import store from './store'

export default class TodoList extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         inputValue: '',
    //         list: []
    //     }
    // }

    render() {
        // const { inputValue, list } = this.state
        const { inputValue, list } = store


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