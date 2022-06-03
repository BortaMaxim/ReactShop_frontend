import React from 'react'
import PropTypes from 'prop-types'
import {Box, CircularProgress, TextField, Typography} from "@mui/material";
import {AdminSelect} from "./AdminSelect";
import {Button} from "@material-ui/core";
import classes from "../../../styles/Auth.module.css";
import {Link} from "react-router-dom";

export const UserManagementCreateForm = (props) => {
    const {fields, onHandleChange, onHandleUpload, onCreateUser, createUserSelector} = props
    return (
        <>
            <form onSubmit={onCreateUser}>
                <Box mt={2}>
                    {
                        createUserSelector.createdResponse.status === 422
                        && <Typography color={'secondary'}>
                            {createUserSelector.createdResponse.data.errors.name}
                        </Typography>
                    }
                    <TextField
                        fullWidth={true}
                        name="name"
                        label="name"
                        value={fields.name}
                        onChange={onHandleChange}
                    />
                </Box>
                <Box mt={2}>
                    {
                        createUserSelector.createdResponse.status === 422
                        && <Typography color={'secondary'}>
                            {createUserSelector.createdResponse.data.errors.email}
                        </Typography>
                    }
                    <TextField
                        fullWidth={true}
                        name="email"
                        label="email"
                        value={fields.email}
                        onChange={onHandleChange}
                    />
                </Box>
                <Box mt={2}>
                    {
                        createUserSelector.createdResponse.status === 422
                        && <Typography color={'secondary'}>
                            {createUserSelector.createdResponse.data.errors.avatar}
                        </Typography>
                    }
                    <input
                        type="file"
                        name={'avatar'}
                        onChange={onHandleUpload}
                    />
                </Box>
                <Box mt={2}>
                    {
                        createUserSelector.createdResponse.status === 422
                        && <Typography color={'secondary'}>
                            {createUserSelector.createdResponse.data.errors.password}
                        </Typography>
                    }
                    <TextField
                        fullWidth={true}
                        type={'password'}
                        name="password"
                        label="password"
                        value={fields.password}
                        onChange={onHandleChange}
                    />
                </Box>
                <Box mt={2}>
                    {
                        createUserSelector.createdResponse.status === 422
                        && <Typography color={'secondary'}>
                            {createUserSelector.createdResponse.data.errors.password_confirmation}
                        </Typography>
                    }
                    <TextField
                        fullWidth={true}
                        type={'password'}
                        name="password_confirmation"
                        label="password_confirmation"
                        value={fields.password_confirmation}
                        onChange={onHandleChange}
                    />
                </Box>
                <AdminSelect fields={fields} onHandleChange={onHandleChange}/>
                <Box mt={2}>
                    <Button type={"submit"} fullWidth={true}  color={"primary"} variant={"outlined"}>
                        {
                            createUserSelector.isCreating === true
                            ? <CircularProgress />
                            : <Typography>Create</Typography>
                        }
                    </Button>
                </Box>
                <div className={classes.auth_action}>
                    <Link to={'/'}>
                        back to Home
                    </Link>
                </div>
            </form>
        </>
    )
}

UserManagementCreateForm.propTypes = {
    fields: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        avatar: PropTypes.string,
        password: PropTypes.string,
        password_confirmation: PropTypes.string,
        roles: PropTypes.string
    }),
    onHandleChange: PropTypes.func.isRequired,
    onHandleUpload: PropTypes.func.isRequired,
    onCreateUser: PropTypes.func.isRequired,
    createUserSelector: PropTypes.object.isRequired,
}