import React from 'react'
import {Container, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AddQuantityCartAction, EmptyCartAction, SubQuantity} from "../../redux/actions/CartActions";
import {CartTable} from "./CartTable";
import {cartPropsValidation} from "../../propTypes/cartProps/cartPropsValidation";


export const Cart = () => {
    const cartSelector = cartPropsValidation(useSelector(state => ({
        carts: state.cart.carts,
    })))
    const dispatch = useDispatch()

    let ListCart = [];
    let TotalCart = 0;

    Object.keys(cartSelector.carts).forEach(function (item) {
        TotalCart += cartSelector.carts[item].quantity * cartSelector.carts[item].price
        ListCart.push(cartSelector.carts[item])
    })

    const addQuantity = (payload) => {
        dispatch(AddQuantityCartAction(payload))
    }
    const subQuantity = (payload) => {
        dispatch(SubQuantity(payload))
    }
    const deleteCart = (payload) => {
        dispatch(EmptyCartAction(payload))
    }
    const totalPrice = (price, tonggia) => {
        return Number(price * tonggia).toLocaleString('eu-US')
    }
    return (
        <div>
            <Container maxWidth={"md"}>
                <Typography variant={'h4'} color={'primary'} align={'center'}>Cart</Typography>
                {
                    cartSelector.carts.length === 0
                    ? <Typography variant={'h4'} color={'secondary'}>Empty cart....</Typography>
                    : <CartTable
                            TotalCart={TotalCart}
                            ListCart={ListCart}
                            addQuantity={addQuantity}
                            subQuantity={subQuantity}
                            deleteCart={deleteCart}
                            totalPrice={totalPrice}
                        />
                }
            </Container>
        </div>
    )
}