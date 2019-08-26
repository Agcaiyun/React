import React, { Component } from 'react'

class MouseTracker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0
        }

        this.handleMouseMove = this.handleMouseMove.bind(this)
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }

    render() {
        const { x, y } = this.state
        return (
            <div
                onMouseMove={this.handleMouseMove}
                style={{
                    height: '100%',
                    border: '1px solid red'
                }}
            >
                <h1>{'请在红色框框内移动鼠标~'}</h1>
                <p>{`当前鼠标位置为：${x}, ${y}`}</p>
            </div>
        )
    }
}

export default MouseTracker;