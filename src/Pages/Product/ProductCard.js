import React from 'react'
import classes from '../../styles/Home.module.css'
import {CustomCircularProgress} from "../../Components/FelpersComponent/CustomCircularProgress";
import {Typography} from "@mui/material";


export const ProductCard = (props) => {
    const {productData} = props
    return (
        <div>
            {
                productData.isLoadProducts === true
                ? <CustomCircularProgress />
                : <div>
                        {
                            productData.product !== ''
                            && <div className={classes.product_card}>
                                <small className={classes.product_id}>{productData.product.id}</small>
                                <div className={classes.product_card_wrapper}>
                                    <div className={classes.product_card_right}>
                                        <img className={classes.product_img} src={productData.product.product_img} alt={productData.product.title}/>
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
                                                <strong>Price: </strong> {productData.product.price}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
            }
        </div>
    )
}