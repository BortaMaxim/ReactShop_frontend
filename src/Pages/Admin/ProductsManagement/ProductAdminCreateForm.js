import React from 'react'
import {Box, Button, Container, Typography} from "@mui/material";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "../../../hooks/useForm";
import {AdminCreateProductAction} from "../../../redux/actions/AdminProductsManagement";
import {IsHideNotificationsAction} from "../../../redux/actions/AdminCategoryManagementAction";
import {ProductAdminCreateFormItem} from "./ProductAdminCreateFormItem";


export const ProductAdminCreateForm = () => {
    const categoriesSelector = useSelector(state => ({
        isCatLoading: state.categories.isCatLoading,
        categories: state.categories.categories,
        createdSuccess: state.adminCreateProduct.createdSuccess,
        createdError: state.adminCreateProduct.createdError,
        isHide: state.adminCreateProduct.isHide,
        isCreated: state.adminCreateProduct.isCreated
    }))
    const {fields, handleUpload, handleChange, clear} = useForm({
        title: '',
        description: '',
        price: '',
        product_img: '',
        category_id: 1
    })

    const history = useHistory()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('title', fields.title)
        formData.append('description', fields.description)
        formData.append('price', fields.price)
        formData.append('product_img', fields.product_img)
        formData.append('category_id', fields.category_id)
        dispatch(AdminCreateProductAction(formData, history))
        clear()
        setTimeout(() => {
            dispatch(IsHideNotificationsAction())
        }, 3000)
    }

    return (
        <Container maxWidth={'md'}>
            <Box mt={2}>
                <Typography variant={'h4'} color={'primary'} align={'center'}>Create Product</Typography>
            </Box>

            <Box mt={2}>
                <Button variant={'contained'} color={'primary'} onClick={() => history.push('/user/admin/product')}>
                    Back
                </Button>
            </Box>
            <ProductAdminCreateFormItem
                selector={categoriesSelector}
                fields={fields}
                handleChange={handleChange}
                handleUpload={handleUpload}
                handleSubmit={handleSubmit}
            />
        </Container>
    )
}