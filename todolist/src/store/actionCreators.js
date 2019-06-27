import { ChangeInputValue, SubmitInputValue, DeleteItem, InitList } from './actionTypes'

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

export const initListAction = (list) => {
    return {
        type: InitList,
        value: list
    }
}