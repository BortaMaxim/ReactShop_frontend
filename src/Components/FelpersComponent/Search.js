import React from 'react'
import {TextField} from "@mui/material";


export const Search = () => {
    return (
        <div>
            <TextField
                fullWidth={true}
                label={'search'}
                id={'search'}
            />
        </div>
    )
}