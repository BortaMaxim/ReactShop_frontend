import React, {useEffect} from 'react'
import {Box, Button, Container, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {
    DeleteUserAction,
    GetUsersAction,
    HideNotificationAction,
    HideUserAction
} from "../../../redux/actions/AdminUsersManagementAction";
import {CustomCircularProgress} from "../../../Components/FelpersComponent/CustomCircularProgress";
import AdminTable from "./AdminTable";
import {useHistory} from "react-router-dom";

export const UserManagement = () => {
    const adminUsersSelector = useSelector(state => ({
        isUsersFetching: state.adminUsers.isUsersFetching,
        allUsers: state.adminUsers.allUsers,
        isShow: state.adminUsers.isShow,
    }))

    const deleteUsersSelector = useSelector(state => ({
        deleteSuccess: state.adminDeleteUsers.deleteSuccess,
        deleteError: state.adminDeleteUsers.deleteError,
    }))

    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetUsersAction())
    }, [dispatch])

    const handleEdit = (id) => {
        history.push(`/user/admin/user/edit/${id}`)
    }

    const handleDeleteUser = (id) => {
        dispatch(DeleteUserAction(id))
        dispatch(HideUserAction(id))
        setTimeout(() => {
            dispatch(HideNotificationAction())
        }, 3000)
    }

    return (
        <Container>
            <Box mt={4}>
                {
                    adminUsersSelector.isUsersFetching === true
                        ? <CustomCircularProgress/>
                        : <div>
                            {
                                deleteUsersSelector.deleteSuccess.success === true
                                    ? <div>
                                        {
                                            adminUsersSelector.isShow === true
                                                ? <Typography color={'primary'}>
                                                    {deleteUsersSelector.deleteSuccess.message}
                                                </Typography>
                                                : null
                                        }
                                    </div>
                                    : null
                            }
                            <Typography variant={'h4'} color={'primary'} align={'center'}>
                                All Users!
                            </Typography>
                            <>
                                <Box mb={4}>
                                    <Button variant={'contained'} color={'primary'} onClick={() => history.push('/user/admin/user/create')}>
                                        Create User
                                    </Button>
                                </Box>
                                {
                                    adminUsersSelector.allUsers.length !== 0
                                        ? <AdminTable
                                            data={adminUsersSelector.allUsers}
                                            handleEdit={handleEdit}
                                            handleDelete={handleDeleteUser}
                                        />
                                        : <Typography color={'secondary'}>No users...</Typography>
                                }
                            </>
                        </div>
                }
            </Box>
        </Container>
    )
}