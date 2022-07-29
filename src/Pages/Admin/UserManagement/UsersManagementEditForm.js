import React from 'react'
import PropTypes from 'prop-types'
import {Box, CircularProgress, TextField, Typography} from "@mui/material";
import {Button} from "@material-ui/core";
import classes from "../../../styles/Auth.module.css";
import {Link} from "react-router-dom";
import {AdminSelect} from "./AdminSelect";


export const UsersManagementEditForm = (props) => {
    const {fields, onHandleUpload, onHandleChange, onSubmitForm, updateUsersSelector} = props
    return (
        <form onSubmit={onSubmitForm}>
            <Box mt={2}>
                {
                    updateUsersSelector.errorResponse.status === 422
                        ? <Typography color={'secondary'}>
                            {updateUsersSelector.errorResponse.data.message}
                        </Typography>
                        : null
                }
                {
                    updateUsersSelector.updatedResponse.success === true
                        ? <Typography color={'primary'}>
                            {updateUsersSelector.updatedResponse.message}
                        </Typography>
                        : null
                }
                <TextField
                    fullWidth={true}
                    name="name"
                    label="name"
                    value={fields.name || ''}
                    onChange={onHandleChange}
                />
            </Box>
            <Box mt={2}>
                <TextField
                    fullWidth={true}
                    name="email"
                    label="email"
                    value={fields.email || ''}
                    onChange={onHandleChange}
                />
            </Box>
            <Box mt={2}>
                <input
                    type="file"
                    name={'avatar'}
                    onChange={onHandleUpload}
                />
            </Box>
            <Box mt={2}>
                <TextField
                    fullWidth={true}
                    type={'password'}
                    name="password"
                    label="password"
                    value={fields.password || ''}
                    onChange={onHandleChange}
                />
            </Box>
            <Box mt={2}>
                <TextField
                    fullWidth={true}
                    type={'password'}
                    name="password_confirmation"
                    label="password_confirmation"
                    value={fields.password_confirmation || ''}
                    onChange={onHandleChange}
                />
            </Box>
            <AdminSelect fields={fields} onHandleChange={onHandleChange}/>
            <Box mt={2}>
                <Button type={"submit"} fullWidth={true}  color={"primary"} variant={"outlined"}>
                    {
                        updateUsersSelector.isUpdating === true
                        ? <CircularProgress />
                        : <Typography>Update</Typography>
                    }
                </Button>
            </Box>
            <div className={classes.auth_action}>
                <Link to={'/'}>
                    back to Home
                </Link>
            </div>
        </form>
    )
}

UsersManagementEditForm.propTypes = {
    fields: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        avatar: PropTypes.any,
        password: PropTypes.string,
        password_confirmation: PropTypes.string,
        roles: PropTypes.string,
    }),
    onHandleUpload: PropTypes.func.isRequired,
    onHandleChange: PropTypes.func.isRequired,
    onSubmitForm: PropTypes.func.isRequired,
    updateUsersSelector: PropTypes.object,
}