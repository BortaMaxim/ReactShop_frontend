import React from 'react'
import classes from '../../styles/Cart.module.css'
import {
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {
    AddQuantityButton,
    SubQuantityButton
} from "../../Components/FelpersComponent/Buttons/TableButtons/AddQuantityButton";
import {AddQuantityCartAction, EmptyCartAction, SubQuantity} from "../../redux/actions/CartActions";


export const Cart = () => {
    const cartSelector = useSelector(state => ({
        carts: state.cart.carts,
    }))
    const dispatch = useDispatch()

    let ListCart = [];
    let TotalCart=0;

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
                    : <TableContainer component={Paper}>
                        <Typography variant={'h4'} color={'primary'}>
                            Total: <strong>{Number(TotalCart).toLocaleString('en-US')} $</strong>
                        </Typography>
                            <Table className={classes.cart_table}>
                                <TableHead className={classes.cart_header}>
                                    <TableRow>
                                        <TableCell>Id</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Title</TableCell>
                                        <TableCell>Product Img</TableCell>
                                        <TableCell>Total Price</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {ListCart.map((cart, key) => (
                                        <TableRow key={key}>
                                            <TableCell>{cart.id}</TableCell>
                                            <TableCell className={classes.table_quantity}>
                                                <AddQuantityButton onClick={() => addQuantity(key)}>
                                                    +
                                                </AddQuantityButton>
                                                <Typography variant={'h6'} align={'center'}>
                                                    {cart.quantity}
                                                </Typography>
                                                <SubQuantityButton onClick={() => subQuantity(key)}>
                                                    -
                                                </SubQuantityButton>
                                            </TableCell>
                                            <TableCell>{cart.title}</TableCell>
                                            <TableCell>
                                                <img className={classes.cart_img} src={cart.product_img} alt={cart.title}/>
                                            </TableCell>
                                            <TableCell>
                                                {totalPrice(cart.price, cart.quantity)}<strong>$</strong>
                                            </TableCell>
                                            <TableCell>
                                                <SubQuantityButton onClick={() => deleteCart(key)}>
                                                    Delete
                                                </SubQuantityButton>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                }
            </Container>
        </div>
    )
}