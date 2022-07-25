import React from 'react';
import classes from '../../styles/PoductComments.module.css'
import {Button, CircularProgress, TextField, Typography} from "@mui/material";

export const ProductCommentsForm = (props) => {
    const {field, handleChange, handleSubmit, commentSelector} = props
    const {isCommentSending} = commentSelector
    return (
        <div className={classes.comment_form}>
            <TextField
                fullWidth={true}
                label={'write comment...'}
                name={'body'}
                value={field}
                onChange={handleChange}
            />
            <Button disabled={field === '' ? true: false} variant={'outlined'} color={'primary'} onClick={handleSubmit}>
                {
                    isCommentSending === true
                        ? <CircularProgress color={'primary'}/>
                        : <Typography> send</Typography>
                }
            </Button>
        </div>
    )
};
