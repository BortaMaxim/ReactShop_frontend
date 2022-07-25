import React, {createContext} from 'react'
import classes from '../../styles/Home.module.css'
import PropTypes from 'prop-types'
import {CustomCircularProgress} from "../../Components/FelpersComponent/CustomCircularProgress";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import {Box, Button, CircularProgress, Typography} from "@mui/material";
import {Slider} from "../../Components/FelpersComponent/Carousel/Slider";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {CustomSnackBar} from "../../Components/FelpersComponent/CustomSnackBar";
import {ProductComments} from "./ProductComments";

export const ProductGallery = createContext(null)

export const ProductCard = (props) => {
    const {
        productData,
        addToCart,
        like,
        dislike,
        likesSelector,
        hide,
        wasLiked,
        open,
        vertical,
        horizontal,
        handleClose
    } = props
    const {isLike, isDislike, dislikeResponse, likeResponse, download} = likesSelector

    return (
        <div>
            {
                productData.product.product_gallery !== undefined
                && <ProductGallery.Provider value={productData.product}>
                    {
                        productData.isLoadProducts === true
                            ? <CustomCircularProgress/>
                            : <>
                                {
                                    productData.product !== ''
                                    && <div className={classes.product_card}>
                                        <small className={classes.product_id}>{productData.product.id}</small>
                                        {
                                            hide === true
                                                ? <div>
                                                    {
                                                        dislikeResponse.success === false
                                                            ? <CustomSnackBar
                                                                message={dislikeResponse.message}
                                                                open={open}
                                                                handleClose={handleClose}
                                                                vertical={vertical}
                                                                horizontal={horizontal}
                                                            />
                                                            : null
                                                    }
                                                </div>
                                                : null
                                        }
                                        {
                                            hide === true
                                                ? <div>
                                                    {
                                                        likeResponse.success === false
                                                            ? <CustomSnackBar
                                                                message={likeResponse.message}
                                                                open={open}
                                                                handleClose={handleClose}
                                                                vertical={vertical}
                                                                horizontal={horizontal}
                                                            />
                                                            : null
                                                    }
                                                </div>
                                                : null
                                        }
                                        <div className={classes.product_card_wrapper}>
                                            <div className={classes.product_card_left}>
                                                <Slider/>
                                                <Box mt={2}>
                                                    {
                                                        download === true
                                                        ? <CustomCircularProgress />
                                                        : <>
                                                            <Button
                                                                color={'primary'}
                                                                variant={'outlined'}
                                                                style={{marginRight: 20}}
                                                                onClick={() => like(productData.product.id)}
                                                                disabled={wasLiked === true}
                                                            >
                                                                {
                                                                    isLike === true
                                                                        ? <CircularProgress color={'primary'} size={20}/>
                                                                        : <>
                                                                            {
                                                                                likeResponse.success === true
                                                                                && <>
                                                                                    <ThumbUpIcon/> &nbsp;
                                                                                    <small>{likeResponse.likes}</small>
                                                                                </>
                                                                            }
                                                                        </>
                                                                }
                                                            </Button>
                                                            <Button
                                                                color={'secondary'}
                                                                variant={'outlined'}
                                                                onClick={() => dislike(productData.product.id)}
                                                                disabled={wasLiked === true}
                                                            >
                                                                {
                                                                    isDislike === true
                                                                        ? <CircularProgress color={"secondary"} size={20}/>
                                                                        : <>
                                                                            {
                                                                                dislikeResponse.success === true
                                                                                && <>
                                                                                    <ThumbDownIcon/> &nbsp;
                                                                                    <small>{dislikeResponse.dislikes}</small>
                                                                                </>
                                                                            }
                                                                        </>
                                                                }
                                                            </Button>
                                                        </>
                                                    }
                                                </Box>
                                            </div>
                                            <div className={classes.product_card_right}>
                                                <div className={classes.product_card_title}>
                                                    <Typography variant={'h4'} color={'primary'}>
                                                        {productData.product.category_id}
                                                    </Typography>
                                                    <Typography variant={'h6'} color={'secondary'}>
                                                        <strong>Title: </strong> {productData.product.title}
                                                    </Typography>
                                                    <Typography variant={'h6'} color={'secondary'}>
                                                        <strong>Description: </strong> {productData.product.description}
                                                    </Typography>
                                                    <Typography variant={'h6'} color={'default'}>
                                                        <strong>Price: </strong> {productData.product.price} <strong>$</strong>
                                                    </Typography>
                                                    <Button variant={'contained'} color={'secondary'}
                                                            onClick={() => addToCart(productData.product)}>
                                                        Buy
                                                        &nbsp;
                                                        <AddShoppingCartIcon/>
                                                    </Button>
                                                </div>
                                                <ProductComments />
                                            </div>
                                        </div>
                                    </div>
                                }
                            </>
                    }
                </ProductGallery.Provider>
            }
        </div>
    )
}

ProductCard.propTypes = {
    productData: PropTypes.object,
    like: PropTypes.func.isRequired,
    dislike: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired
}