import React, { Component, Fragment, createRef } from 'react'


class CustomTextInput extends Component {
    constructor(props) {
        super(props)
        this.textInput = createRef()

        this.focusTextInput = this.focusTextInput.bind(this)
    }

    focusTextInput() {
        this.textInput.current.focus()
    }

    test() {
        console.log('CustomTextInput console test')
    }

    render() {
        return (
            <Fragment>
                <input
                    type={'text'}
                    ref={this.textInput}
                />

                <input
                    type={'button'}
                    value={'Focus the text input'}
                    onClick={this.focusTextInput}
                />
            </Fragment>
        )
    }
}

export default CustomTextInput;