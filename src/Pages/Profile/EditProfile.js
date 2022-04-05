import React from 'react'
import {Box, Button, Container, Typography} from "@material-ui/core";
import classes from "../../styles/Auth.module.css";
import {Link} from "react-router-dom";
import {CircularProgress, TextField} from "@mui/material";

export const EditProfile = (props) => {
    const {onChangeProfile, onUploadChange, onSubmit, fields, isUpdating, errorResponse} = props
    return (
        <div>
            <Box mt={2}>
                <Container maxWidth={'sm'}>
                    {
                        errorResponse !== ''
                            ? <Typography color={"secondary"}>{errorResponse.response.data.message}</Typography>
                            : null
                    }
                    <div className={classes.auth_wrapper}>
                        <form onSubmit={onSubmit} encType={"multipart/form-data"}>
                            <Box>
                                <TextField
                                    name="name"
                                    fullWidth={true}
                                    label="name"
                                    onChange={onChangeProfile}
                                    value={fields.name}
                                />
                            </Box>
                            <Box mt={2}>
                                <TextField
                                    name="email"
                                    fullWidth={true}
                                    label="email"
                                    onChange={onChangeProfile}
                                    value={fields.email}
                                />
                            </Box>
                            <Box mt={2}>
                                <input
                                    type="file"
                                    name="avatar"
                                    onChange={onUploadChange}
                                />
                            </Box>
                            <Box mt={2}>
                                <TextField
                                    type="password"
                                    name="password"
                                    fullWidth={true}
                                    label="password"
                                    onChange={onChangeProfile}
                                    value={fields.password}
                                />
                            </Box>
                            <Box mt={2}>
                                <TextField
                                    type="password"
                                    name="password_confirmation"
                                    fullWidth={true}
                                    label="confirm_password"
                                    onChange={onChangeProfile}
                                    value={fields.password_confirmation}
                                />
                            </Box>
                            <Box mt={2}>
                                <Button type={"submit"} fullWidth={true} color={"primary"} variant={"contained"}>
                                    {
                                        isUpdating === true
                                            ? <CircularProgress/>
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
                    </div>
                </Container>
            </Box>
        </div>
    )
}