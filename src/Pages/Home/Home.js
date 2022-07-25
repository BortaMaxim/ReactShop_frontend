import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from "react-redux";
import {HomeItem} from "./HomeItem";
import {Box, CircularProgress, Container} from "@mui/material";
import {useInfinityScroll} from "../../hooks/useInfinityScroll";
import {useHistory} from "react-router-dom";
import {Search} from "../../Components/FelpersComponent/Search";
import {FetchProducts, FilterProducts} from "../../redux/actions/ProductsAction";
import {SelectFilter} from "../../Components/FelpersComponent/SelectFilter";
import {SortByAlphabet, SortByPriceAction} from "../../redux/actions/SortAction";
import {homePropsValidation} from "../../propTypes/homeProps/homePropsValidation";

const BASE_URL = 'http://localhost:8000/api'

export const Home = () => {
    const productsSelector = homePropsValidation(useSelector((state) => ({
        isLoadProducts: state.products.isLoadProducts,
        products: state.products.products,
    })))

    const history = useHistory()
    const dispatch = useDispatch()
    const [filter, setFilter] = useState('')
    const [sortTypes, setSortTypes] = useState('')

    const {
        items,
        hasNext,
        loadNext,
    } = useInfinityScroll({getItems: ({page}) => axios.get(`${BASE_URL}/products/limit/8?page=${page}`)})

    useEffect(() => {
        dispatch(FetchProducts(1))
    }, [dispatch])

    useEffect(() => {
        if(hasNext === true) {
            window.addEventListener('scroll', handleScroll)
        }

        return () => window.removeEventListener('scroll', handleScroll)
    }, [hasNext])


    const handleScroll = async () => {
        const scrollSize = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
        if (scrollSize) {
            await loadNext()
        }
    }

    const handleFilterChange = (e) => {
        setFilter(e.target.value)
    }

    const handleFilterSubmit = (e) => {
        e.preventDefault()
        dispatch(FilterProducts(filter))
        history.push(`/products/search/q.${filter}`)
    }

    const handleProductItem =  (id) => {
        history.push(`/product-item/${id}`)
    }

    const handleSortChange = (e) => {
        let value = e.target.value
        setSortTypes(value)
        let direction = value.endsWith('asc') ? 'asc': 'desc'
        if (value.startsWith('price')) {
            dispatch(SortByPriceAction({direction}, items))
        }else {
            dispatch(SortByAlphabet({direction}, items))
        }
    }

    return (
        <>
            <Container maxWidth={"lg"}>
                <Box mt={3} width={'100%'}>
                    <Search
                        handleFilterChange={handleFilterChange}
                        handleFilterSubmit={handleFilterSubmit}
                        filter={filter}
                    />
                </Box>
                <Box mt={2}>
                    <SelectFilter handleSortChange={handleSortChange} sortTypes={sortTypes}/>
                </Box>
                <Box mt={4} marginBottom={6}>
                    <HomeItem
                        handleProductItem={handleProductItem}
                        items={items}
                    />
                    <div>
                        {
                            productsSelector.isLoadProducts === true
                            ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 20}}>
                                     <CircularProgress color={"secondary"}/>
                                </div>
                            : null
                        }
                    </div>
                </Box>
            </Container>
        </>
    )
}