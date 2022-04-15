import React from 'react'
import classes from '../styles/Home.module.css'
import {Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {Container} from "@mui/material";

export const NoMatch = () => {
    return (
        <div>
            <Container maxWidth={'md'}>
                <Link to={'/home'} className={classes.link}>
                    <Typography variant={'h6'} color={"primary"}>Go Home</Typography>
                </Link>
                <Typography variant={'h4'} color={"secondary"}>No match...</Typography>
            </Container>
        </div>
    )
}