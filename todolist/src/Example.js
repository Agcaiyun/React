import React, { Component, Fragment, useState } from 'react'

// function Example() {
//     const [count, setCount] = useState(10)

//     return (
//         <Fragment>
//             <p>
//                 {
//                     `You clicked ${count} times`
//                 }
//             </p>

//             <button onClick={() => setCount(count + 10)}>
//                 {
//                     'Click me'
//                 }
//             </button>
//         </Fragment>
//     )
// }

class Example extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <Fragment>
                <p>{`You clicked ${this.state.count} times`}</p>
                <button onClick={this.handleClick}>{'Click me'}</button>
            </Fragment>
        )
    }


}

export default Example;