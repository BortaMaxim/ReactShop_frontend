import React from 'react'
import {Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

export const NoMatch = () => {
    return (
        <div>
            <Link to={'/home'}>
                <Typography variant={'h6'} color={"primary"}>Go Home</Typography>
            </Link>
            <Typography variant={'h4'} color={"secondary"}>No match...</Typography>
        </div>
    )
}