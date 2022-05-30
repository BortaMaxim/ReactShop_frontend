import React, {useState} from 'react'
import {Box, Button, Container, Typography} from "@mui/material";
import {useHistory} from "react-router-dom";
import classes from "../../../styles/Auth.module.css";
import {UserManagementCreateForm} from "./UserManagementCreateForm";
import {useDispatch, useSelector} from "react-redux";
import {CreateUserAction, IsHideAction} from "../../../redux/actions/AdminUsersManagementAction";


export const UserManagementCreate = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const createUserSelector = useSelector(state => ({
        isCreating: state.adminCreateUsers.isCreating,
        createdResponse: state.adminCreateUsers.createdResponse,
        isHide: state.adminCreateUsers.isHide,
    }))

    const [fields, setFields] = useState({
        name: '',
        email: '',
        avatar: '',
        password: '',
        password_confirmation: '',
        roles: '',
    })

    const onHandleChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }

    const onHandleUpload = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.files[0]
        })
    }

    const onCreateUser = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', fields.name)
        formData.append('email', fields.email)
        formData.append('avatar', fields.avatar)
        formData.append('password', fields.password)
        formData.append('password_confirmation', fields.password_confirmation)
        formData.append('roles', fields.roles)
        dispatch(CreateUserAction(formData))
        setTimeout(() => {
            dispatch(IsHideAction())
        }, 3000)
    }

    return (
        <Container maxWidth={'md'}>
            <Box mt={4}>
                <Typography variant={'h4'} color={'primary'} align={'center'}>Create User</Typography>
                <Button variant={'contained'} color={'primary'} onClick={history.goBack}>Go Back</Button>
            </Box>
            <Box className={classes.auth_wrapper} mt={4}>
                {
                    createUserSelector.createdResponse.success === true
                    && <div>
                        {
                            createUserSelector.isHide === false
                                ? <Typography color={'primary'}>
                                    {createUserSelector.createdResponse.message}
                                </Typography>
                                : null
                        }
                    </div>
                }
                <UserManagementCreateForm
                    fields={fields}
                    createUserSelector={createUserSelector}
                    onHandleChange={onHandleChange}
                    onHandleUpload={onHandleUpload}
                    onCreateUser={onCreateUser}
                />
            </Box>
        </Container>
    )
}