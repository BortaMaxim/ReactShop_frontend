import React, {useEffect} from 'react'
import classes from '../../styles/Home.module.css'
import {Box, Container, Typography} from "@mui/material";
import {Link, useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {TotalProducts} from './TotalProducts'
import {FilterProducts} from "../../redux/actions/ProductsAction";

export const FilteringProducts = () => {
    const filteredProducts = useSelector(state => state.products.filteredProducts)
    const history = useHistory()
    const {slug} = useParams()
    const dispatch = useDispatch()

    const handleProductItem = (id) => {
        history.push(`/product-item/${id}`)
    }
    useEffect(() => {
        dispatch(FilterProducts(slug))
    }, [dispatch])

    useEffect(() => {
        filteredProducts.map(product => {
            if (product.title === slug) {
                return  history.push('/no-match')
            }
        })
    }, [filteredProducts])

    return (
        <div>
            <Container maxWidth={"lg"}>
                <Box mt={4}>
                    <Link to={'/'} className={classes.link}>
                        <Typography variant={'h4'} color={'primary'}>Back</Typography>
                    </Link>
                    {
                        filteredProducts.length !== 0
                            ? <TotalProducts
                                items={filteredProducts}
                                handleProductItem={handleProductItem}
                            />
                            : null
                    }
                </Box>
            </Container>
        </div>
    )
}