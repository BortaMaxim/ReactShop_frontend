import * as CartTypes from '../types/CartTypes'

const initialState = {
    carts: [],
    numberCart: 0
}

export const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case CartTypes.ADD_TO_CART:
            if (state.numberCart === 0) {
                let cart = {
                    id: action.payload.id,
                    quantity: 1,
                    title: action.payload.title,
                    product_img: action.payload.product_img,
                    price: action.payload.price
                }
                state.carts.push(cart)
            } else {
                let check = false
                state.carts.map((cart, key) => {
                    if (cart.id === action.payload.id) {
                        state.carts[key].quantity++
                        check = true
                    }
                    return check
                })
                if (!check) {
                    let _cart = {
                        id: action.payload.id,
                        quantity: 1,
                        title: action.payload.title,
                        product_img: action.payload.product_img,
                        price: action.payload.price
                    }
                    state.carts.push(_cart)
                }
            }
            return {
                ...state,
                numberCart: state.numberCart + 1,
                carts: state.carts
            }
        case CartTypes.ADD_QUANTITY:
            state.numberCart++
            state.carts[action.payload].quantity++
            return {
                ...state,
            }
        case CartTypes.SUB_QUANTITY:
            let quantity = state.carts[action.payload].quantity
            if (quantity > 1) {
                state.numberCart--
                state.carts[action.payload].quantity--
            }
            return {
                ...state
            }
        case CartTypes.EMPTY_CART:
            let quantity_ = state.carts[action.payload].quantity
            return {
                ...state,
                numberCart: state.numberCart - quantity_,
                carts: state.carts.filter(item => {
                    return item.id !== state.carts[action.payload].id
                })
            }
        default:
            return state
    }
}