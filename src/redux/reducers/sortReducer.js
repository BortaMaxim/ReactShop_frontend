import * as SortTypes from '../types/SortTypes'
import {sortAsc, sortDesc} from "../../helpers/sorting";

export const sortReducer = (state = {}, action) => {
    switch (action.type) {
        case SortTypes.SORT_BY_PRICE:
            Object.assign({}, state)
            action.payload.direction === 'asc'
                ? sortAsc(action.products, 'price')
                : sortDesc(action.products, 'price')
            return {
                ...state,
            }
        case SortTypes.SORT_BY_ALPHABET:
            Object.assign({}, state)
            action.payload.direction === 'asc'
            ? sortAsc(action.products, 'title')
            : sortDesc(action.products, 'title')
            return {
                ...state,
            }
        default:
            return state
    }
}