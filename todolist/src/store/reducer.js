const defaultState = {
    inputValue: 'inputValue',
    list: [1, 2, 3, 4, 5, 6, 7]
}

export default function (state = defaultState, action) {
    // return action.type === 'change-input-value' ?
    //     JSON.parse(JSON.stringify(action.value))
    //     : state
    if (action.type === 'change-input-value') {
        let newList = JSON.parse(JSON.stringify(action.value))
        newList = [...state.list, newList]
        return {
            inputValue: action.value,
            list: newList
        }
    }
    return state

}
