import React, {useEffect} from 'react'
import axios from 'axios'
import {useSelector} from "react-redux";
import {HomeItem} from "./HomeItem";
import {Box, Button, CircularProgress, Container, Typography} from "@mui/material";
import {useInfinityScroll} from "../../hooks/useInfinityScroll";

const BASE_URL = 'http://localhost:8000/api'

export const Home = () => {
    const productsSelector = useSelector((state) => ({
        isLoadProducts: state.products.isLoadProducts,
        products: state.products.products,
    }))
    const {
        items,
        hasNext,
        loadNext,
    } = useInfinityScroll({getItems: ({page}) => axios.get(`${BASE_URL}/products/limit/8?page=${page}`)})

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = () => {
        const scrollSize = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
        if (scrollSize) {
            if (hasNext) {
                loadNext()
            }
        }
    }

    return (
        <>
            <Container maxWidth={"lg"}>
                <Box mt={14} marginBottom={6}>
                    <HomeItem
                        productsSelector={productsSelector}
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