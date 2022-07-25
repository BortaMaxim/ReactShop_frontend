import React from 'react'
import classes from '../../styles/Auth.module.css'
import PropTypes from 'prop-types'
import {Box, Button, CircularProgress, Container, Typography} from '@material-ui/core'
import {Field} from "redux-form";
import {renderTextField} from "../../redux-form/renderTextField";
import {Link} from "react-router-dom";
import {CustomSnackBar} from "../../Components/FelpersComponent/CustomSnackBar";

const Register = (props) => {
    const {
        handleChange,
        fields,
        onSubmit,
        registerSelector,
        open,
        handleClose,
        vertical,
        horizontal
    } = props

    return (
        <div>
            <Box mt={14}>
                <Container maxWidth={'sm'}>
                    <div className={classes.auth_wrapper}>
                        {
                            registerSelector.isHide === false
                                ? <>
                                    {
                                        registerSelector.authResponse.success === true
                                            ?  <CustomSnackBar
                                                message={registerSelector.authResponse.message}
                                                open={open}
                                                vertical={vertical}
                                                horizontal={horizontal}
                                                handleClose={handleClose}
                                            />
                                            : null
                                    }
                                </>
                                : null
                        }
                        <Typography align={"center"} variant={'h4'} color={"primary"}>
                            Registration
                        </Typography>
                        <form onSubmit={onSubmit}>
                            {
                                registerSelector.authResponse !== {}
                                    ? <Typography
                                        color={"secondary"}>{registerSelector.authResponse.name}</Typography>
                                    : null
                            }
                            <Box mt={2}>
                                <Field
                                    name="name"
                                    component={renderTextField}
                                    label="name"
                                    onChange={handleChange}
                                    value={fields.name}
                                />
                            </Box>
                            <Box mt={2}>
                                {
                                    registerSelector.authResponse !== {}
                                        ? <Typography
                                            color={"secondary"}>{registerSelector.authResponse.email}</Typography>
                                        : null
                                }
                                <Field
                                    name="email"
                                    component={renderTextField}
                                    label="email"
                                    onChange={handleChange}
                                    value={fields.email}
                                />
                            </Box>
                            <Box mt={2}>
                                {
                                    registerSelector.authResponse !== {}
                                        ? <Typography
                                            color={"secondary"}>{registerSelector.authResponse.password}</Typography>
                                        : null
                                }
                                <Field
                                    type="password"
                                    name="password"
                                    component={renderTextField}
                                    label="password"
                                    onChange={handleChange}
                                    value={fields.password}
                                />
                            </Box>
                            <Box mt={2}>
                                <Field
                                    type="password"
                                    name="password_confirmation"
                                    component={renderTextField}
                                    label="confirm_password"
                                    onChange={handleChange}
                                    value={fields.password_confirmation}
                                />
                            </Box>
                            <Box mt={2}>
                                <Button type={"submit"} fullWidth={true} color={"primary"} variant={"outlined"}>
                                    {
                                        registerSelector.isAuthLoading === true
                                            ? <CircularProgress color={"primary"}/>
                                            : <Typography>Registration</Typography>
                                    }
                                </Button>
                            </Box>
                            <div className={classes.auth_action}>
                                <Link to={'/'}>
                                    back to Home
                                </Link>
                                <Link to={'/user/login'}>
                                    back to Login
                                </Link>
                            </div>
                        </form>
                    </div>
                </Container>
            </Box>
        </div>
    )
}

Register.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    registerSelector: PropTypes.object,
    fields: PropTypes.objectOf(PropTypes.string)
}

export default Register

