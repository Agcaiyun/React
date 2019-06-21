const defaultState = {
    inputValue: 'inputValue',
    list: [1, 2, 3, 4, 5, 6, 7]
}

export default function (state = defaultState, action) {
    const { type, value } = action
    let newState = JSON.parse(JSON.stringify(state))

    if (type === 'change-input-value') {
        newState.inputValue = value
    }

    if (type === 'submit-input-value') {
        newState.list = [...state.list, value]
    }

    if (type === 'delete-item') {
        newState.list = state.list.filter((item, index) => action.value !== index)
    }

    return newState
}
