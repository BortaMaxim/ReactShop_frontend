import React from 'react'
import classes from '../../styles/Home.module.css'
import {Button, TextField, Typography} from "@mui/material";


export const Search = (props) => {
    const {handleFilterChange, handleFilterSubmit, filter} = props
    return (
        <div>
            <form className={classes.form_search} onSubmit={handleFilterSubmit}>
                <TextField
                    fullWidth={true}
                    label={'search...'}
                    id={'search'}
                    value={filter}
                    onChange={handleFilterChange}
                />
                <Button color={"secondary"} variant={'contained'} type={"submit"}>
                    <Typography>Search</Typography>
                </Button>
            </form>
        </div>
    )
}