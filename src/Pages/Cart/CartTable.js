import React from 'react'
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import classes from "../../styles/Cart.module.css";
import {GreenButton, RedButton} from "../../Components/FelpersComponent/Buttons/CustomButton";
import {switchProductsUrlImg} from "../../helpers/switchProductsImgUrl";

export const CartTable = (props) => {
    const {TotalCart, ListCart, addQuantity, deleteCart, subQuantity, totalPrice} = props
    return (
        <div>
            <TableContainer component={Paper}>
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
                                    <GreenButton onClick={() => addQuantity(key)}>
                                        +
                                    </GreenButton>
                                    <Typography variant={'h6'} align={'center'}>
                                        {cart.quantity}
                                    </Typography>
                                    <RedButton onClick={() => subQuantity(key)}>
                                        -
                                    </RedButton>
                                </TableCell>
                                <TableCell>{cart.title}</TableCell>
                                <TableCell>
                                    <img className={classes.cart_img} src={switchProductsUrlImg(cart.product_img)} alt={cart.title}/>
                                </TableCell>
                                <TableCell>
                                    {totalPrice(cart.price, cart.quantity)}<strong>$</strong>
                                </TableCell>
                                <TableCell>
                                    <RedButton onClick={() => deleteCart(key)}>
                                        Delete
                                    </RedButton>
                                </TableCell>
                            </TableRow>
                        ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}