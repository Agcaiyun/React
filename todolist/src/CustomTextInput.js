import React, { Fragment, createRef } from 'react';

function CustomTextInput() {
    let textInput = createRef()

    function handleClick() {
        textInput.current.focus()
    }

    return (
        <Fragment>
            <input
                type={'text'}
                ref={textInput}
            />

            <input
                type={'button'}
                value={'Focus the text input'}
                onClick={handleClick}
            />
        </Fragment>
    )
}

export default CustomTextInput;