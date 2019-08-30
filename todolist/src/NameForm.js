import React, { Component, createRef } from 'react'

class NameForm extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

        this.handleSubmit = this.handleSubmit.bind(this)

        this.inputRef = createRef()
    }

    handleSubmit(event) {
        console.log(`A name was submitted: ${this.inputRef.current.files[0].name}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type='file' ref={this.inputRef} />
                </label>
                <input type='submit' value='submit' />
            </form>
        )
    }
}

export default NameForm;