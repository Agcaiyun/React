import React from 'react'

const TodoListUI = (props) => {
    const { inputValue, list, handleInputChange, submit, deleteItem } = props

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

export default TodoListUI