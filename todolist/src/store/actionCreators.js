import { ChangeInputValue, SubmitInputValue, DeleteItem, InitList } from './actionTypes'
import axios from 'axios'

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

export const initList = () => {
    return async (dispatch) => {
        const res = await axios.get('https://www.easy-mock.com/mock/5d145a33673c6f47dd3d622d/example1/getlist#!method=get')
        const list = res.data.date

        dispatch(initListAction(list))
    }
}