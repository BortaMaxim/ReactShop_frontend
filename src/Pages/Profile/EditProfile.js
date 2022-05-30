import React from 'react'
import {Box, Button, Container, Typography} from "@material-ui/core";
import classes from "../../styles/Auth.module.css";
import {Link} from "react-router-dom";
import {CircularProgress, TextField} from "@mui/material";

export const EditProfile = (props) => {
    const {handleChange, handleUpload, onSubmit, fields, profileSelector} = props
    return (
        <div>
            <Box mt={2}>
                <Container maxWidth={'sm'}>
                    {
                        profileSelector.errorResponse !== ''
                            ? <Typography color={"secondary"}>
                                {profileSelector.errorResponse.response.data.message}
                        </Typography>
                            : null
                    }
                    <div className={classes.auth_wrapper}>
                        <form onSubmit={onSubmit} encType={"multipart/form-data"}>
                            <Box>
                                <TextField
                                    name="name"
                                    fullWidth={true}
                                    label="name"
                                    onChange={handleChange}
                                    value={fields.name || ''}
                                />
                            </Box>
                            <Box mt={2}>
                                <TextField
                                    name="email"
                                    fullWidth={true}
                                    label="email"
                                    onChange={handleChange}
                                    value={fields.email || ''}
                                />
                            </Box>
                            <Box mt={2}>
                                <input
                                    type="file"
                                    name="avatar"
                                    onChange={handleUpload}
                                />
                            </Box>
                            <Box mt={2}>
                                <TextField
                                    type="password"
                                    name="password"
                                    fullWidth={true}
                                    label="password"
                                    onChange={handleChange}
                                    value={fields.password || ''}
                                />
                            </Box>
                            <Box mt={2}>
                                <TextField
                                    type="password"
                                    name="password_confirmation"
                                    fullWidth={true}
                                    label="confirm_password"
                                    onChange={handleChange}
                                    value={fields.password_confirmation || ''}
                                />
                            </Box>
                            <Box mt={2}>
                                <Button type={"submit"} fullWidth={true} color={"primary"} variant={"contained"}>
                                    {
                                        profileSelector.isUpdating === true
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