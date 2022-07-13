import React, {useEffect} from 'react'
import {Box, CircularProgress, Container, Typography} from "@mui/material";
import {ProductsAdminTable} from "./ProductsAdminTable";
import {ProductAdminCreate} from "./ProductAdminCreate";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {
    AdminDeleteProductAction, AdminHideProductAction,
    AdminProductsFetchProductsAction
} from "../../../redux/actions/AdminProductsManagement";
import {IsHideNotificationsAction} from "../../../redux/actions/AdminCategoryManagementAction";
import {productsPropsValidator} from "../../../propTypes/adminPropTypes/productsPropsValidator";

export const ProductManagement = () => {
    const token = localStorage.getItem('user-token')
    const history = useHistory()
    const dispatch = useDispatch()

    const adminProductsSelector = productsPropsValidator(useSelector(state => ({
        products: state.adminProducts.products,
        loading: state.adminProducts.loading,
        deleteSuccess: state.adminDeleteProduct.deleteSuccess,
        isHide: state.adminDeleteProduct.isHide,
    })))

    useEffect(() => {
        dispatch(AdminProductsFetchProductsAction(token))
    }, [dispatch])

    const handleEdit = (id) => {
        history.push(`/user/admin/product/edit/${id}`)
    }
    const handleDelete = (id) => {
        dispatch(AdminDeleteProductAction(id, token))
        dispatch(AdminHideProductAction(id))
        setTimeout(() => {
            dispatch(IsHideNotificationsAction())
        }, 3000)
    }
    return (
        <Container maxWidth={'md'}>
            <Box mt={4}>
                <Typography variant={'h4'} color={'primary'} align={'center'}>
                    All Products
                </Typography>
            </Box>
            <Box mt={2}>
                <ProductAdminCreate />
            </Box>
            <Box mt={2}>

                {
                    adminProductsSelector.loading === true
                        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 20}}>
                            <CircularProgress color={"secondary"}/>
                        </div>
                        : <ProductsAdminTable
                            data={adminProductsSelector.products}
                            adminProductsSelector={adminProductsSelector}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                }
            </Box>
        </Container>
    )
}