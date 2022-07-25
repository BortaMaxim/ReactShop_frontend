import React from 'react';
import classes from '../../styles/PoductComments.module.css'
import {CircularProgress, Typography} from "@mui/material";

const Comments = (props) => {
    const {commentsSelector} = props
    const {loading, comments} = commentsSelector

    let reversedComments = [...comments].reverse()
    return (
        <div>
            {
                loading === true
                    ? <CircularProgress/>
                    : <>
                        {
                            reversedComments.length === 0
                                ? <Typography color={'secondary'}>no comments...</Typography>
                                : <>
                                    {
                                        reversedComments.map(el => (
                                            <div key={el.id} className={classes.comment_wrapper}>
                                                <span>{el.user_id}</span>
                                                <p className={classes.comment_body}>{el.body}</p>
                                                <small className={classes.comment_created_at}>{el.created_at}</small>
                                            </div>
                                        ))
                                    }
                                </>
                        }
                    </>
            }
        </div>
    )
};

export default Comments;