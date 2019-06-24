import { ChangeInputValue, SubmitInputValue, DeleteItem } from './store/actionTypes'

export const getInputChangeAction = (input) => {
    return {
        type: ChangeInputValue,
        value: input
    }
}

export const getDeleteItemAction = (index) => {
    return {
        type: DeleteItem,
        value: index
    }
}

export const getSubmitAction = () => {
    return {
        type: SubmitInputValue
    }
}