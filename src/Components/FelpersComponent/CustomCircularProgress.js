import React from 'react'
import {CircularProgress} from "@mui/material";


export const CustomCircularProgress = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 200}}>
            <CircularProgress color={"secondary"}/>
        </div>
    )
}