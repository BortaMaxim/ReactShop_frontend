import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import classes from "../../styles/Cart.module.css";
import {GreenButton, RedButton} from "../../Components/FelpersComponent/Buttons/CustomButton";
import {switchProductsUrlImg} from "../../helpers/switchProductsImgUrl";
import {useHistory} from "react-router-dom";
import {CustomModal} from "../../Components/FelpersComponent/CustomModal";
import {CheckoutContainer} from "../Checkout/CheckoutContainer";

export const CartTable = (props) => {
    const {TotalCart, ListCart, addQuantity, deleteCart, subQuantity, totalPrice, modalOpen, setModalOpen, toggle} = props
    const history = useHistory()

    useEffect(() => {
        localStorage.setItem('total-cart', JSON.stringify(TotalCart))
    }, [TotalCart])

    useEffect(() => {
        return () => {
            localStorage.removeItem('total-cart')
        }
    }, [])

    return (
        <div>
            <TableContainer component={Paper}>
                <Box mt={2} mb={4} display={'flex'} justifyContent={"space-between"}>
                    <Typography variant={'h4'} color={'primary'}>
                        Total: <strong>{Number(TotalCart).toLocaleString('en-US')} $</strong>
                    </Typography>
                    <Button color={'primary'} variant={'contained'} onClick={toggle}>
                        Pay {Number(TotalCart).toLocaleString('en-US')} $
                    </Button>
                </Box>
                <CustomModal title={'Billing address'} isActive={modalOpen} handleClose={() => setModalOpen(false)}>
                    <CheckoutContainer />
                </CustomModal>
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
                        {
                            ListCart.length !== 0 && <>
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
                            </>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

CartTable.propTypes = {
    TotalCart: PropTypes.number.isRequired,
    ListCart: PropTypes.array,
    addQuantity: PropTypes.func.isRequired,
    deleteCart: PropTypes.func.isRequired,
    subQuantity: PropTypes.func.isRequired,
    totalPrice: PropTypes.func.isRequired,
}