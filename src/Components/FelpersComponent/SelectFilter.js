import React, {useState} from 'react'
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export const SelectFilter = (props) => {
    const {handleSortChange, sortTypes} = props

    return (
        <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="age">sort</InputLabel>
            <Select
                labelId="age"
                id="demo-simple-select-autowidth"
                onChange={(e) => handleSortChange(e)}
                value={sortTypes}
                autoWidth
                label="Age"
            >
                <MenuItem value={'alphabet_asc'}>
                    <em>Title - A-Z</em>
                </MenuItem>
                <MenuItem value={'alphabet_desc'}>
                    <em>Title - Z-A</em>
                </MenuItem>
                <MenuItem value={'price_asc'}>
                    <em>Price - Lowest to Highest</em>
                </MenuItem>
                <MenuItem value={'price_desc'}>
                    <em>Price - Highest to Lowest</em>
                </MenuItem>
            </Select>
        </FormControl>
    )
}