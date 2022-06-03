import React from 'react'
import {reduxForm} from "redux-form";
import validate from "../../redux-form/validateReduxForm";
import Register from "./Register";
import {useDispatch, useSelector} from "react-redux";
import {RegisterAction} from "../../redux/actions/AuthAction";
import {useHistory} from "react-router-dom";
import {useForm} from "../../hooks/useForm";
import {registerPropsValidation} from "../../propTypes/registerProps/registerPropsValidation";

const RegisterContainer = (props) => {
    const {fields, handleChange} = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    const history = useHistory()

    let registerSelector = registerPropsValidation(useSelector(state => ({
            authResponse: state.auth.authResponse,
            isAuthLoading: state.auth.isAuthLoading,
        })
    ))

    const dispatch = useDispatch()

    const onRegister = (e) => {
        e.preventDefault()
        dispatch(RegisterAction(fields, history))
    }

    return (
        <>
            <Register
                {...props}
                handleChange={handleChange}
                onSubmit={onRegister}
                fields={fields}
                registerSelector={registerSelector}
            />
        </>
    )
}

export default reduxForm({
    form: 'register',
    validate
})(RegisterContainer)