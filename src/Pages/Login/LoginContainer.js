import React, {useState} from 'react'
import Login from './Login'
import validate from '../../redux-form/validateReduxForm'
import {reduxForm} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {LoginAction} from "../../redux/actions/AuthAction";
import {useHistory} from "react-router-dom";
import {loginPropsValidation} from "../../propTypes/loginProps/loginPropsValidation";
import {IsHideNotificationsAction} from "../../redux/actions/AdminCategoryManagementAction";
import {useForm} from "../../hooks/useForm";
import {useOpen} from "../../hooks/useOpen";


const LoginContainer = (props) => {
    const loginSelector = loginPropsValidation(useSelector(state => ({
            authResponse: state.auth.authResponse,
            isAuthLoading: state.auth.isAuthLoading,
            emailError: state.auth.emailError,
            isHide: state.auth.isHide,
        })
    ))

    const {fields, handleChange, clear} = useForm({
        email: '',
        password: '',
    })
    const {open, vertical, horizontal, handleOpen, handleClose} = useOpen()
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const login = (e) => {
        e.preventDefault()
        dispatch(LoginAction(fields, history, setError, handleOpen))
        clear()
        setTimeout(() => {
            dispatch(IsHideNotificationsAction())
        }, 3000)
    }
    return (
        <>
            <Login
                {...props}
                loginSelector={loginSelector}
                fields={fields}
                open={open}
                vertical={vertical}
                horizontal={horizontal}
                handleClose={handleClose}
                error={error}
                handleChange={handleChange}
                onSubmit={login}
            />
        </>
    )
}

export default reduxForm({
    form: 'login',
    validate
})(LoginContainer)