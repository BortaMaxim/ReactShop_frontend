import React, {useEffect} from 'react'
import {Box, Container, Typography} from "@mui/material";
import classes from '../../styles/Home.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ProductCard} from "./ProductCard";
import {FetchOneProductAction} from "../../redux/actions/ProductsAction";
import {Link, useParams} from "react-router-dom";

export const ProductItem = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const productData = useSelector(state => {
        return {
            product: state.products.product,
            isLoadProducts: state.products.isLoadProducts,
        }
    })

    useEffect(() => {
        dispatch(FetchOneProductAction(id))
    }, [dispatch])

    return (
        <div>
            <Container maxWidth={"lg"}>
                <Typography align={"center"} variant={'h4'} color="primary">Product item</Typography>
                <Link to={`/`} className={classes.link}>
                    <Typography variant={'h4'} color={'primary'}>Back</Typography>
                </Link>
                <Box mt={4} mb={4}>
                    <ProductCard productData={productData}/>
                </Box>
            </Container>
        </div>
    )
}