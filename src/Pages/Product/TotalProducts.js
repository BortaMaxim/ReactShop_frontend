import React from 'react'
import classes from "../../styles/Home.module.css";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import CardMediaModal from "../../Components/FelpersComponent/ReserveModal";


export const TotalProducts = (props) => {
    const {items, handleProductItem} = props
    return (
        <div>
            <div className={classes.root}>
                {
                    items.map(el => (
                        <Card className={classes.card} key={el.id}>
                            <CardMediaModal el={el}/>
                            <CardContent className={classes.card_content}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {el.title}
                                </Typography>
                                <strong>{el.price} $</strong>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => handleProductItem(el.id)}>
                                    More
                                </Button>
                                <small className={classes.product_id}>{el.id}</small>
                            </CardActions>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}