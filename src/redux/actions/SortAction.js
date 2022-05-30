import * as SortTypes from '../types/SortTypes'

export const SortByPriceAction = (payload, products) => (dispatch) => {
    dispatch({
        type: SortTypes.SORT_BY_PRICE,
        products,
        payload
    })
}

export const SortByAlphabet = (payload, products) => (dispatch) => {
    dispatch({
        type: SortTypes.SORT_BY_ALPHABET,
        products,
        payload
    })
}