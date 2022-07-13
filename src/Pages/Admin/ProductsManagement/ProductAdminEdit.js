import React, {useEffect, useState} from 'react'
import {Box, Button, Container, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import ProductAdminEditForm from "./ProductAdminEditForm";
import {useHistory, useParams} from "react-router-dom";
import {AdminFetchOneProductAction, AdminUpdateProductAction} from "../../../redux/actions/AdminProductsManagement";
import {IsHideNotificationsAction} from "../../../redux/actions/AdminCategoryManagementAction";


export const ProductAdminEdit = () => {
    const token = localStorage.getItem('user-token')
    const dispatch = useDispatch()
    const history = useHistory()
    const {id} = useParams()
    const updateProductSelector = useSelector(state => ({
        categories: state.categories.categories,
        product: state.adminProducts.product,
        isHide: state.adminUpdateProduct.isHide,
        isUpdating: state.adminUpdateProduct.isUpdating,
        updatedSuccess: state.adminUpdateProduct.updatedSuccess,
        updatedError: state.adminUpdateProduct.updatedError,
    }))
    const [fields, setFields] = useState({...updateProductSelector.product})

    useEffect(() => {
        setFields(updateProductSelector.product)
    }, [updateProductSelector.product])

    useEffect(() => {
        dispatch(AdminFetchOneProductAction(id, token))
    }, [dispatch])

    const handleChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }

    const handleUpload = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.files[0]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('title', fields.title)
        formData.append('description', fields.description)
        formData.append('price', fields.price)
        formData.append('product_img', fields.product_img)
        formData.append('category_id', fields.category_id)
        dispatch(AdminUpdateProductAction(formData, id, history, token))
        setTimeout(() => {
            dispatch(IsHideNotificationsAction())
        }, 3000)
    }
    return (
        <Container maxWidth={'md'}>
            <Box mt={4}>
                <Typography variant={'h4'} color={'primary'} align={'center'}>Edit Product</Typography>
            </Box>
            <Box mt={4}>
                <Button variant={'contained'} color={'primary'} onClick={() => history.push('/user/admin/product')}>
                    Back
                </Button>
            </Box>
            <ProductAdminEditForm
                selector={updateProductSelector}
                fields={fields}
                handleChange={handleChange}
                handleUpload={handleUpload}
                handleSubmit={handleSubmit}
            />
        </Container>
    )
}