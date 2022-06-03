import React from 'react'
import {Button} from "@mui/material";
import {useHistory} from "react-router-dom";


export const ProductAdminCreate = () => {
    const history = useHistory()
    return (
        <div>
            <Button variant={'contained'} color={'primary'} onClick={() => history.push('/user/admin/product/create')}>
                Create Product
            </Button>
        </div>
    )
}