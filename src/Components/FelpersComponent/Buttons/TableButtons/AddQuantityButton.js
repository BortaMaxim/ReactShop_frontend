import React from 'react'
import { styled } from '@mui/material/styles';
import {Button} from "@mui/material";
import {green, red} from "@mui/material/colors";


export const AddQuantityButton = styled(Button)(({theme}) => ({
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    "&:hover": {
        backgroundColor: green[700]
    },
}))

export const SubQuantityButton = styled(Button)(({theme}) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    "&:hover": {
        backgroundColor: red[700]
    },
}))