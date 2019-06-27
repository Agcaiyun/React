import { ChangeInputValue, SubmitInputValue, DeleteItem, InitList } from './actionTypes'

const defaultState = {
    inputValue: 'inputValue',
    list: []
}

export default function (state = defaultState, action) {
    const { type, value } = action
    const { inputValue, list } = state
    let newState = JSON.parse(JSON.stringify(state))

    if (type === ChangeInputValue) {
        newState.inputValue = value
    }

    if (type === SubmitInputValue) {
        newState.list = inputValue ? [...list, inputValue] : [...list]
        newState.inputValue = ''
    }

    if (type === DeleteItem) {
        newState.list = list.filter((item, index) => action.value !== index)
    }

    if (type === InitList) {
        newState.list = JSON.parse(JSON.stringify(value))
    }

    return newState
}
