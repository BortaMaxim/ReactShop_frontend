import React, {useEffect} from 'react'
import classes from '../../styles/Home.module.css'
import {Box, Container, Typography} from "@mui/material";
import {Link, useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {TotalProducts} from './TotalProducts'
import {FilterProducts} from "../../redux/actions/ProductsAction";
import {CustomCircularProgress} from "../../Components/FelpersComponent/CustomCircularProgress";

export const FilteringProducts = () => {
    const filteredSelectorProducts = useSelector(state => ({
        filteredProducts: state.products.filteredProducts,
        isFilteringProducts: state.products.isFilteringProducts,
    }))
    const history = useHistory()
    const {slug} = useParams()
    const dispatch = useDispatch()

    const handleProductItem = (id) => {
        history.push(`/product-item/${id}`)
    }
    useEffect(() => {
        dispatch(FilterProducts(slug))
    }, [dispatch])

    return (
        <div>
            <Container maxWidth={"lg"}>
                <Box mt={4}>
                    <Link to={'/'} className={classes.link}>
                        <Typography variant={'h4'} color={'primary'}>Back</Typography>
                    </Link>
                    <Typography variant={'h6'} color={'secondary'}>
                        Found <strong>{filteredSelectorProducts.filteredProducts.length}</strong> products !
                    </Typography>
                    {
                        filteredSelectorProducts.isFilteringProducts === true
                            ? <CustomCircularProgress/>
                            : <>
                                {
                                    filteredSelectorProducts.filteredProducts.length !== 0
                                        ? <TotalProducts
                                            items={filteredSelectorProducts.filteredProducts}
                                            handleProductItem={handleProductItem}
                                        />
                                        : <Typography variant={'h4'} color={'secondary'}>
                                            No Products ...
                                        </Typography>
                                }
                            </>
                    }
                </Box>
            </Container>
        </div>
    )
}