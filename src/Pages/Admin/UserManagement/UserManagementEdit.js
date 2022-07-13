import React, {useEffect, useState} from 'react'
import {GetOneUserAction, UpdateUserAction} from '../../../redux/actions/AdminUsersManagementAction'
import classes from '../../../styles/Auth.module.css'
import {useDispatch, useSelector} from "react-redux";
import {Box, Container, Typography} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import {CustomCircularProgress} from "../../../Components/FelpersComponent/CustomCircularProgress";
import {UsersManagementEditForm} from "./UsersManagementEditForm";
import {usersPropsValidation} from '../../../propTypes/adminPropTypes/usersPropsValidation'

export const UserManagementEdit = () => {
    const editUsersSelector = usersPropsValidation(useSelector(state => ({
        isEditFetching: state.adminEditUsers.isEditFetching,
        editResponse: state.adminEditUsers.editResponse,
    })))
    const updateUsersSelector = usersPropsValidation(useSelector(state => ({
        updatedResponse: state.adminUpdateUsers.updatedResponse,
        errorResponse: state.adminUpdateUsers.errorResponse,
        isUpdating: state.adminUpdateUsers.isUpdating,
    })))

    const [fields, setFields] = useState({...editUsersSelector.editResponse})
    const dispatch = useDispatch()
    const token = localStorage.getItem('user-token')
    const {id} = useParams()

    useEffect(() => {
        setFields(editUsersSelector.editResponse)
    }, [editUsersSelector.editResponse])


    useEffect(() => {
        dispatch(GetOneUserAction(id))
    }, [dispatch])

    const onHandleUpload = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.files[0]
        })
    }

    const onHandleChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitForm = (e) => {
        let formData = new FormData()
        formData.append('name', fields.name)
        formData.append('email', fields.email)
        formData.append('avatar', fields.avatar)
        formData.append('password', fields.password)
        formData.append('password_confirmation', fields.password_confirmation)
        formData.append('roles', fields.roles)
        e.preventDefault()
        dispatch(UpdateUserAction(formData, id, token))
    }

    return (
        <Container maxWidth={'md'}>
            <Box mt={4} mb={4}>
                {
                    editUsersSelector.isEditFetching === true
                        ? <CustomCircularProgress/>
                        : <>
                            <Typography variant={'h4'} color={'primary'} align={'center'}>
                                Edit Users
                            </Typography>
                            <Link to={'/user/admin/user'} className={classes.link}>
                                <Typography variant={'h5'} color={'primary'}>
                                    Go Back
                                </Typography>
                            </Link>
                            <Box className={classes.auth_wrapper} mt={4}>
                                <UsersManagementEditForm
                                    fields={fields}
                                    onHandleUpload={onHandleUpload}
                                    onHandleChange={onHandleChange}
                                    onSubmitForm={onSubmitForm}
                                    updateUsersSelector={updateUsersSelector}
                                />
                            </Box>
                        </>
                }
            </Box>
        </Container>
    )
}