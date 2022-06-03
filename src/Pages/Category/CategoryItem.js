import React from 'react'
import PropTypes from 'prop-types'
import classes from '../../styles/Home.module.css'
import CardMediaModal from "../../Components/FelpersComponent/ReserveModal";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";

export const CategoryItem = (props) => {
    const {category, handleProductItemInfo} = props

    return (
        <div className={classes.root}>
            {
                category.data.length !== 0
                    ? <>
                        {
                            category.data.map(el => (
                                <Card className={classes.card} key={el.id}>
                                    <CardMediaModal el={el}/>
                                    <CardContent className={classes.card_content}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {el.title}
                                        </Typography>
                                        <strong>{el.price} $</strong>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={() => handleProductItemInfo(el.id)}>
                                            More
                                        </Button>
                                        <small className={classes.product_id}>{el.id}</small>
                                    </CardActions>
                                </Card>
                            ))
                        }
                    </>
                    : <Typography variant={'h4'} color={'secondary'}>
                        No Products...
                    </Typography>
            }
        </div>
    )
}

CategoryItem.propTypes = {
    category: PropTypes.object,
    handleProductItemInfo: PropTypes.func.isRequired
}