import React, { Component } from 'react'

export default class Test extends Component {
    render() {
        return (
            <input
                placeholder={'input'}
                onChange={() => { console.log('input onChange') }}
            />
        )
    }
}