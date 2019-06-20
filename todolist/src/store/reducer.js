const defaultState = {
    inputValue: 'inputValue',
    list: [1, 2, 3, 4, 5, 6, 7]
}

export default function (state = defaultState, action) {
    console.log(action)
    return state
}