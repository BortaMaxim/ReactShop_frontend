import React from 'react'
import {styled} from '@mui/material/styles';
import {Button} from "@mui/material";
import {green, orange, red} from "@mui/material/colors";


export const GreenButton = styled(Button)(({theme}) => ({
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    "&:hover": {
        backgroundColor: green[700]
    },
}))

export const RedButton = styled(Button)(({theme}) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    "&:hover": {
        backgroundColor: red[700]
    },
}))

export const YellowButton = styled(Button)(({theme}) => ({
    color: theme.palette.getContrastText(orange[300]),
    backgroundColor: orange[300],
    "&:hover": {
        backgroundColor: orange[700]
    },
}))