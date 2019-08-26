import React, { Component, createRef } from 'react'
import CustomTextInput from './CustomTextInput'


class AutoFocusTextInput extends Component {
    constructor(props) {
        super(props)

        this.textInput = createRef()
    }

    componentDidMount() {
        // console.log(this.textInput.current)
        // this.textInput.current.test()
        this.textInput.current.focusTextInput()
    }

    render() {
        return (
            <CustomTextInput ref={this.textInput} />
        )
    }
}

export default AutoFocusTextInput;