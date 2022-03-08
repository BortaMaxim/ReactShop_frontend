import React from 'react'
import {Box, Button, CircularProgress, Container, Typography} from "@material-ui/core";
import classes from "../../styles/Auth.module.css";
import {Field} from "redux-form";
import {renderTextField} from "../../redux-form/renderTextField";
import {Link} from "react-router-dom";

const Login = (props) => {
    return (
        <div>
            <Box mt={14}>
                <Container maxWidth={'sm'}>
                    <div className={classes.auth_wrapper}>
                        {
                            props.loginSelector.authResponse.success === true
                                ? <h2 className={classes.auth_title}>{props.loginSelector.authResponse.message}</h2>
                                : null
                        }
                        {
                            props.loginSelector.emailError.success === false
                                ? <Typography color={"secondary"}>{props.loginSelector.emailError.message}</Typography>
                                : null
                        }
                        <Typography align={"center"} variant={'h4'} color={"primary"}>
                            Login
                        </Typography>
                        <form onSubmit={props.onSubmit}>
                            <Box mt={2}>
                                {
                                    props.loginSelector.authResponse !== {}
                                        ? <Typography
                                            color={"secondary"}>{props.loginSelector.authResponse.email}</Typography>
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
                                    props.loginSelector.authResponse !== {}
                                        ? <Typography
                                            color={"secondary"}>{props.loginSelector.authResponse.password}</Typography>
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
                                <Button type={"submit"} fullWidth={true} color={"primary"} variant={"contained"}>
                                    {
                                        props.loginSelector.isAuthLoading === true
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

export default Login