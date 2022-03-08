import React from 'react'
import classes from '../../styles/Auth.module.css'
import {Box, Button, CircularProgress, Container, Typography} from '@material-ui/core'
import {Field} from "redux-form";
import {renderTextField} from "../../redux-form/renderTextField";
import {Link} from "react-router-dom";

const Register = (props) => {
    return (
        <div>
            <Box mt={14}>
                <Container maxWidth={'sm'}>
                    <div className={classes.auth_wrapper}>
                        {
                            props.registerSelector.authResponse.success === true
                                ? <h2 className={classes.auth_title}>{props.registerSelector.authResponse.message}</h2>
                                : null
                        }
                        <Typography align={"center"} variant={'h4'} color={"primary"}>
                            Registration
                        </Typography>
                        <form onSubmit={props.onSubmit}>
                            {
                                props.registerSelector.authResponse !== {}
                                    ? <Typography
                                        color={"secondary"}>{props.registerSelector.authResponse.name}</Typography>
                                    : null
                            }
                            <Box mt={2}>
                                <Field
                                    name="name"
                                    component={renderTextField}
                                    label="name"
                                    onChange={props.onChange}
                                    value={props.fields.name}
                                />
                            </Box>
                            <Box mt={2}>
                                {
                                    props.registerSelector.authResponse !== {}
                                        ? <Typography
                                            color={"secondary"}>{props.registerSelector.authResponse.email}</Typography>
                                        : null
                                }
                                <Field
                                    name="email"
                                    component={renderTextField}
                                    label="email"
                                    onChange={props.onChange}
                                    value={props.fields.email}
                                />
                            </Box>
                            <Box mt={2}>
                                {
                                    props.registerSelector.authResponse !== {}
                                        ? <Typography
                                            color={"secondary"}>{props.registerSelector.authResponse.password}</Typography>
                                        : null
                                }
                                <Field
                                    type="password"
                                    name="password"
                                    component={renderTextField}
                                    label="password"
                                    onChange={props.onChange}
                                    value={props.fields.password}
                                />
                            </Box>
                            <Box mt={2}>
                                <Field
                                    type="password"
                                    name="password_confirmation"
                                    component={renderTextField}
                                    label="confirm_password"
                                    onChange={props.onChange}
                                    value={props.fields.password_confirmation}
                                />
                            </Box>
                            <Box mt={2}>
                                <Button type={"submit"} fullWidth={true} color={"primary"} variant={"contained"}>
                                    {
                                        props.registerSelector.isAuthLoading === true
                                            ? <CircularProgress color={"secondary"}/>
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
export default Register

