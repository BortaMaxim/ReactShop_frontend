import React, {useEffect} from 'react'
import {Box, Container, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {ProductCard} from "./ProductCard";
import {FetchOneProductAction} from "../../redux/actions/ProductsAction";

export const ProductItem = () => {
    const dispatch = useDispatch()
    const productData = useSelector(state => {
        return {
            product: state.products.product,
            isLoadProducts: state.products.isLoadProducts,
        }
    })
    const product_id = localStorage.getItem('product-id')
    useEffect(() => {
        dispatch(FetchOneProductAction(product_id))
    }, [dispatch])

    return (
        <div>
            <Container maxWidth={"lg"}>
                <Typography align={"center"} variant={'h4'} color="primary">Product item</Typography>
                <Box mt={4}>
                    <ProductCard productData={productData}/>
                </Box>
            </Container>
        </div>
    )
}