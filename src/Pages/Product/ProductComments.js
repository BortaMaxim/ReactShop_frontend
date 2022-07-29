import React, {useEffect} from 'react';
import classes from '../../styles/PoductComments.module.css'
import Comments from "./Comments";
import {ProductCommentsForm} from "./ProductCommentsForm";
import {useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "../../hooks/useForm";
import {GetCommentsAction, SentCommentAction} from "../../redux/actions/CommentsAction";
import {CustomSnackBar} from "../../Components/FelpersComponent/CustomSnackBar";
import {useOpen} from "../../hooks/useOpen";
import {commentsPropsValidation} from "../../propTypes/commentsPropTypes/commentsPropsValidation";

export const ProductComments = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const token = localStorage.getItem('user-token')
    const history = useHistory()

    const commentSelector = commentsPropsValidation(useSelector(state => ({
        loading: state.comments.loading,
        comments: state.comments.comments,
        message: state.comments.message,
        isCommentSending: state.comments.isCommentSending
    })))

    const {fields, clear, handleChange} = useForm({body: ''})
    const {open, handleOpen, horizontal, vertical, handleClose} = useOpen()

    useEffect(() => {
        dispatch(GetCommentsAction(id))
    }, [dispatch, id])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!token) {
            return  history.push('/user/login')
        }
        let formData = new FormData()
        formData.append('body', fields.body)
        dispatch(SentCommentAction(formData, id, token))
        handleOpen({
            vertical: 'bottom',
            horizontal: 'right'
        })
        clear()
    }

    return (
        <>
            <ProductCommentsForm
                field={fields.body}
                commentSelector={commentSelector}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <div className={classes.root}>
                {
                    commentSelector.message.success === true
                    && <CustomSnackBar
                        open={open}
                        message={commentSelector.message.message}
                        horizontal={horizontal}
                        vertical={vertical}
                        handleClose={handleClose}
                    />
                }
                <Comments
                    commentsSelector={commentSelector}
                />
            </div>
        </>
    )
};
