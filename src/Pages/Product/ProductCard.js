import React, {createContext} from 'react'
import classes from '../../styles/Home.module.css'
import PropTypes from 'prop-types'
import {CustomCircularProgress} from "../../Components/FelpersComponent/CustomCircularProgress";
import {Button, Typography} from "@mui/material";
import {Slider} from "../../Components/FelpersComponent/Carousel/Slider";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const ProductGallery = createContext(null)

export const ProductCard = (props) => {
    const {productData, addToCart} = props

    return (
        <div>
            {
                productData.product.product_gallery !== undefined
                && <ProductGallery.Provider value={productData.product}>
                    {
                        productData.isLoadProducts === true
                            ? <CustomCircularProgress/>
                            : <div>
                                {
                                    productData.product !== ''
                                    && <div className={classes.product_card}>
                                        <small className={classes.product_id}>{productData.product.id}</small>
                                        <div className={classes.product_card_wrapper}>
                                            <div className={classes.product_card_left}>
                                                <Slider />
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
                                                    <Button variant={'contained'} color={'secondary'} onClick={() => addToCart(productData.product)}>
                                                        Buy
                                                        &nbsp;
                                                        <AddShoppingCartIcon />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                    }
                </ProductGallery.Provider>
            }
        </div>
    )
}

ProductCard.propTypes = {
    productData: PropTypes.object,
    addToCart: PropTypes.func.isRequired
}