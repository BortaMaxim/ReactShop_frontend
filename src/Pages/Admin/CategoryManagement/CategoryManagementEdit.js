import React, {useEffect, useState} from 'react'
import {Box, Button, Container, Typography} from "@mui/material";
import {useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    IsHideNotificationsAction,
    UpdateCategoryAction,
    ViewCategoryAction
} from "../../../redux/actions/AdminCategoryManagementAction";
import {CategoryManagementUpdateForm} from "./CategoryManagementUpdateForm";


export const CategoryManagementEdit = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {id} = useParams()

    const viewCategorySelector = useSelector(state => ({
        download: state.adminViewCategory.download,
        category: state.adminViewCategory.category,
    }))

    const updateCategorySelector = useSelector(state => ({
        isUpdating: state.adminUpdateCategory.isUpdating,
        updatedResponse: state.adminUpdateCategory.updatedResponse,
        updatedError: state.adminUpdateCategory.updatedError,
        isHide: state.adminUpdateCategory.isHide,
    }))

    const [fields, setFields] = useState({...viewCategorySelector.category})

    useEffect(() => {
        setFields(viewCategorySelector.category)
    }, [viewCategorySelector.category])

    useEffect(() => {
        dispatch(ViewCategoryAction(id))
    }, [dispatch])

    const handleChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('name', fields.name)
        dispatch(UpdateCategoryAction(formData, id))
        setTimeout(() => {
            dispatch(IsHideNotificationsAction())
        }, 3000)
    }
    return (
        <Container maxWidth={'md'}>
            <Box mt={4}>
                <Typography variant={'h4'} color={'primary'} align={'center'}>Edit Category</Typography>
            </Box>
            <Box mt={4}>
                <Button color={'primary'} onClick={history.goBack} variant={'contained'}>
                    Back
                </Button>
                <CategoryManagementUpdateForm
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    updateCategorySelector={updateCategorySelector}
                    fields={fields}
                />
            </Box>
        </Container>
    )
}