import React, {useState} from 'react'
import Login from './Login'
import validate from '../../redux-form/validateReduxForm'
import {reduxForm} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {LoginAction} from "../../redux/actions/AuthAction";
import {useHistory} from "react-router-dom";


const LoginContainer = (props) => {
    const loginSelector = useSelector(state => ({
            authResponse: state.auth.authResponse,
            isAuthLoading: state.auth.isAuthLoading,
            emailError: state.auth.emailError,
        })
    )
    const initialState = {
        email: '',
        password: '',
    }
    const [{email, password}, setFields] = useState(initialState)
    const dispatch = useDispatch()
    const history = useHistory()

    const onChange = (e) => {
        setFields((prevState) => ({...prevState, [e.target.name]: e.target.value}))
    }

    const login = (e) => {
        e.preventDefault()
        dispatch(LoginAction({email, password}, history))
    }
    return (
        <>
            <Login
                {...props}
                loginSelector={loginSelector}
                fields={{email, password}}
                onChange={onChange}
                onSubmit={login}
            />
        </>
    )
}

export default reduxForm({
    form: 'login',
    validate
})(LoginContainer)