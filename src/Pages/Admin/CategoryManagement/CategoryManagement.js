import React, {useEffect} from 'react'
import classes from '../../../styles/Home.module.css'
import {Box, Container, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {FetchCategories} from "../../../redux/actions/CategoriesAction";
import {CategoryAdminTable} from './CategoryAdminTable'
import {CustomCircularProgress} from "../../../Components/FelpersComponent/CustomCircularProgress";
import {CategoryManagementCreate} from "./CategoryManagementCreate";
import {useHistory} from "react-router-dom";
import {useForm} from "../../../hooks/useForm";
import {
    CreateCategoryAction,
    DeleteCategoryAction,
    HideCategoryAction,
    IsHideNotificationsAction
} from "../../../redux/actions/AdminCategoryManagementAction";
import {adminCategoriesPropTypesValidation} from "../../../propTypes/adminPropTypes/categoriesPropsValidation";
import {categoriesPropsValidation} from "../../../propTypes/categoriesProps/categoriesPropsValidation";

export const CategoryManagement = () => {
    const token = localStorage.getItem('user-token')
    const dispatch = useDispatch()
    const history = useHistory()

    const categorySelector = categoriesPropsValidation(useSelector((state) => ({
        isCatLoading: state.categories.isCatLoading,
        categories: state.categories.categories,
    })))

    const createCategorySelector = adminCategoriesPropTypesValidation(useSelector(state => ({
        isCreating: state.adminCreateCategory.isCreating,
        createdResponse: state.adminCreateCategory.createdResponse,
        isHide: state.adminCreateCategory.isHide,
    })))
    const deleteCategorySelector = adminCategoriesPropTypesValidation(useSelector(state => ({
        deleteSuccess: state.adminDeleteCategory.deleteSuccess,
        isShow: state.adminDeleteCategory.isShow,
    })))

    const {fields, handleChange, clear} = useForm({
        category_name: ''
    })

    useEffect(() => {
        dispatch(FetchCategories())
    }, [dispatch])

    const handleEdit = (id) => {
        history.push(`/user/admin/category/edit/${id}`)
    }
    const handleDelete = (id) => {
        dispatch(DeleteCategoryAction(id, token))
        dispatch(HideCategoryAction(id))
        setTimeout(() => {
            dispatch(IsHideNotificationsAction())
        }, 3000)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('name', fields.category_name)
        dispatch(CreateCategoryAction(formData, history, token))
        clear()
        setTimeout(() => {
            dispatch(IsHideNotificationsAction())
        }, 6000)
    }
    return (
        <Container maxWidth={'md'}>
            {
                categorySelector.isCatLoading === true
                    ? <CustomCircularProgress/>
                    : <>
                        <Box mt={4}>
                            <Typography variant={'h4'} color={'primary'} align={'center'}>
                                Categories
                            </Typography>
                        </Box>
                    <div className={classes.root}>
                        <Box style={{width: '100%'}}>
                            <CategoryManagementCreate
                                createCategorySelector={createCategorySelector}
                                fields={fields}
                                handleChange={handleChange}
                                handleSubmit={handleSubmit}
                            />
                        </Box>
                        <Box mt={4} style={{width: '100%'}}>
                            {
                                categorySelector.categories.length !== 0
                                    ? <CategoryAdminTable
                                        data={categorySelector.categories}
                                        deleteCategorySelector={deleteCategorySelector}
                                        handleEdit={handleEdit}
                                        handleDelete={handleDelete}
                                    />
                                    : <Typography color={'secondary'}>No categories...</Typography>
                            }
                        </Box>
                    </div>
                    </>
            }
        </Container>
    )
}