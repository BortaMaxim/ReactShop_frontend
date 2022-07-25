import React from 'react'
import {reduxForm} from "redux-form";
import validate from "../../redux-form/validateReduxForm";
import Register from "./Register";
import {useDispatch, useSelector} from "react-redux";
import {RegisterAction} from "../../redux/actions/AuthAction";
import {useHistory} from "react-router-dom";
import {useForm} from "../../hooks/useForm";
import {registerPropsValidation} from "../../propTypes/registerProps/registerPropsValidation";
import {useOpen} from "../../hooks/useOpen";

const RegisterContainer = (props) => {
    const {fields, handleChange, clear} = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    const history = useHistory()

    let registerSelector = registerPropsValidation(useSelector(state => ({
            authResponse: state.auth.authResponse,
            isAuthLoading: state.auth.isAuthLoading,
            isHide: state.auth.isHide
        })
    ))

    const dispatch = useDispatch()
    const {open, horizontal, vertical, handleOpen, handleClose} = useOpen()

    const onRegister = (e) => {
        e.preventDefault()
        dispatch(RegisterAction(fields, history, handleOpen))
        clear()
    }

    return (
        <>
            <Register
                {...props}
                handleChange={handleChange}
                onSubmit={onRegister}
                fields={fields}
                open={open}
                horizontal={horizontal}
                vertical={vertical}
                handleClose={handleClose}
                registerSelector={registerSelector}
            />
        </>
    )
}

export default reduxForm({
    form: 'register',
    validate
})(RegisterContainer)