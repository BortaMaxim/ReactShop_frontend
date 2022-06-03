import React from 'react'
import PropTypes from 'prop-types'
import {Box, Button, CircularProgress, Container, Typography} from "@material-ui/core";
import classes from "../../styles/Auth.module.css";
import {Field} from "redux-form";
import {renderTextField} from "../../redux-form/renderTextField";
import {Link} from "react-router-dom";

const Login = (props) => {
    const {fields, loginSelector, handleChange, onSubmit} = props
    return (
        <div>
            <Box mt={14}>
                <Container maxWidth={'sm'}>
                    <div className={classes.auth_wrapper}>
                        {
                            loginSelector.isHide === false
                            ? <div>
                                    {
                                        loginSelector.authResponse.success === true
                                            ? <h2 className={classes.auth_title}>{loginSelector.authResponse.message}</h2>
                                            : null
                                    }
                                    {
                                        loginSelector.emailError.success === false
                                            ? <Typography color={"secondary"}>{loginSelector.emailError.message}</Typography>
                                            : null
                                    }
                                </div>
                            : null
                        }
                        <Typography align={"center"} variant={'h4'} color={"primary"}>
                            Login
                        </Typography>
                        <form onSubmit={onSubmit}>
                            <Box mt={2}>
                                {
                                    loginSelector.authResponse !== {}
                                        ? <Typography
                                            color={"secondary"}>{loginSelector.authResponse.email}</Typography>
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
                                    loginSelector.authResponse !== {}
                                        ? <Typography
                                            color={"secondary"}>{loginSelector.authResponse.password}</Typography>
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
                                <Button type={"submit"} fullWidth={true} color={"primary"} variant={"contained"}>
                                    {
                                        loginSelector.isAuthLoading === true
                                            ? <CircularProgress color={"secondary"}/>
                                            : <Typography>Login</Typography>
                                    }
                                </Button>
                            </Box>
                            <div className={classes.auth_action}>
                                <Link to={'/'}>
                                    back to Home
                                </Link>
                                <Link to={'/user/register'}>
                                    back to Registration
                                </Link>
                            </div>
                        </form>
                    </div>
                </Container>
            </Box>
        </div>
    )
}

Login.propTypes = {
    fields: PropTypes.objectOf(PropTypes.string),
    loginSelector: PropTypes.object,
    handleChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default Login