import React, {useEffect} from 'react'
import {Box, Container, Typography} from "@mui/material";
import classes from '../../styles/Home.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ProductCard} from "./ProductCard";
import {FetchOneProductAction} from "../../redux/actions/ProductsAction";
import {Link, useHistory, useParams} from "react-router-dom";
import {AddToCartAction} from "../../redux/actions/CartActions";

export const ProductItem = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {id} = useParams()
    const productData = useSelector(state => {
        return {
            product: state.products.product,
            isLoadProducts: state.products.isLoadProducts,
        }
    })
    const cartSelector = useSelector(state => ({
        cart: state.cart
    }))

    useEffect(() => {
        dispatch(FetchOneProductAction(id))
    }, [dispatch])

    const addToCart = (product) => {
        dispatch(AddToCartAction(product))
        const token = localStorage.getItem('user-token')
        if (!token) {
            return history.push('/user/login')
        }else {
            return history.push('/user/cart')
        }
    }

    return (
        <div>
            <Container maxWidth={"lg"}>
                <Typography align={"center"} variant={'h4'} color="primary">Product item</Typography>
                <Link to={`/home`} className={classes.link}>
                    <Typography variant={'h4'} color={'primary'}>Back</Typography>
                </Link>
                <Box mt={4} mb={4}>
                    <ProductCard
                        productData={productData}
                        addToCart={addToCart}
                        cartSelector={cartSelector}
                    />
                </Box>
            </Container>
        </div>
    )
}