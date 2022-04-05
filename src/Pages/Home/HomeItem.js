import React from 'react'
import classes from '../../styles/Home.module.css'
import {Button, Card, CardActions, CardContent, CircularProgress, Typography} from "@mui/material";
import CardMediaModal from "../../Components/FelpersComponent/ReserveModal";


export const HomeItem = (props) => {
    const {items} = props
    return (
        <>
            <div>
                {
                    items.length !== 0
                        ? <>
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
                                                <Button size="small">Learn More</Button>
                                                <small className={classes.product_id}>{el.id}</small>
                                            </CardActions>
                                        </Card>
                                    ))
                                }
                            </div>
                        </>
                        : null
                }
            </div>
        </>
    )
}