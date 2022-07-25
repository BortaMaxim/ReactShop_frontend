import React, {useEffect, useState} from 'react'
import {Box, Container, Typography} from "@mui/material";
import classes from '../../styles/Home.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ProductCard} from "./ProductCard";
import {FetchOneProductAction} from "../../redux/actions/ProductsAction";
import {Link, useHistory, useParams} from "react-router-dom";
import {AddToCartAction} from "../../redux/actions/CartActions";
import {productPropsValidation} from "../../propTypes/productProps/productPropsValidation";
import {cartPropsValidation} from "../../propTypes/cartProps/cartPropsValidation";
import {GetDislikesAction, GetLikesAction, SetDislikeAction, SetLikeAction} from "../../redux/actions/LikesAction";
import {likesPropsValidation} from "../../propTypes/likesPropTypes/likesPropsValidation";
import {useOpen} from "../../hooks/useOpen";

export const ProductItem = () => {
    const dispatch = useDispatch()
    const token = localStorage.getItem('user-token')
    const history = useHistory()
    const {id} = useParams()
    const [hide, setHide] = useState(null)
    const [wasLiked, setWasLiked] = useState(false)
    const {open, vertical, horizontal, handleOpen, handleClose} = useOpen()

    const productData = productPropsValidation(useSelector(state => {
        return {
            product: state.products.product,
            isLoadProducts: state.products.isLoadProducts,
        }
    }))

    const likesSelector = likesPropsValidation(useSelector(state => ({
        isLike: state.likesDislikes.isLike,
        download: state.likesDislikes.download,
        isDislike: state.likesDislikes.isDislike,
        likeResponse: state.likesDislikes.likeResponse,
        dislikeResponse: state.likesDislikes.dislikeResponse,
    })))

    const cartSelector = cartPropsValidation(useSelector(state => ({
        cart: state.cart
    })))

    useEffect(() => {
        dispatch(FetchOneProductAction(id))
        return () => {
            setWasLiked(false)
        }
    }, [dispatch, id])

    useEffect(() => {
        dispatch(GetLikesAction(id))
        dispatch(GetDislikesAction(id))
    }, [dispatch, id])

    const addToCart = (product) => {
        if (!token) {
            return history.push('/user/login')
        }else {
            dispatch(AddToCartAction(product))
            history.push('/user/cart')
        }
    }

    const like = (id) => {
        if(!token) {
            return history.push('/user/login')
        }
        dispatch(SetLikeAction(id, token))
        handleOpen({
            vertical: 'bottom',
            horizontal: 'left'
        })
        setHide(true)
        setWasLiked(true)
        setTimeout(() => {
            setHide(false)
        }, 2000)
    }

    const dislike = (id) => {
        if(!token) {
            return history.push('/user/login')
        }
        dispatch(SetDislikeAction(id, token))
        handleOpen({
            vertical: 'bottom',
            horizontal: 'left'
        })
        setHide(true)
        setWasLiked(true)
        setTimeout(() => {
            setHide(false)
        }, 2000)
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
                        open={open}
                        vertical={vertical}
                        horizontal={horizontal}
                        handleClose={handleClose}
                        like={like}
                        wasLiked={wasLiked}
                        hide={hide}
                        dislike={dislike}
                        productData={productData}
                        addToCart={addToCart}
                        cartSelector={cartSelector}
                        likesSelector={likesSelector}
                    />
                </Box>
            </Container>
        </div>
    )
}