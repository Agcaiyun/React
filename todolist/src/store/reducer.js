import { ChangeInputValue, SubmitInputValue, DeleteItem } from './actionTypes'

const defaultState = {
    inputValue: 'inputValue',
    list: [1, 2, 3, 4, 5, 6, 7]
}

export default function (state = defaultState, action) {
    const { type, value } = action
    const { inputValue, list } = state
    let newState = JSON.parse(JSON.stringify(state))

    if (type === ChangeInputValue) {
        newState.inputValue = value
    }

    if (type === SubmitInputValue) {
        newState.list = [...list, inputValue]
        newState.inputValue = ''
    }

    if (type === DeleteItem) {
        newState.list = list.filter((item, index) => action.value !== index)
    }

    return newState
}
