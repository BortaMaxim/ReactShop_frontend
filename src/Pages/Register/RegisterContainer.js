import React, {useState} from 'react'
import {reduxForm} from "redux-form";
import validate from "../../redux-form/validateReduxForm";
import Register from "../Register";
import {useDispatch, useSelector} from "react-redux";
import {RegisterAction} from "../../redux/actions/AuthAction";
import {useHistory} from "react-router-dom";

const RegisterContainer = (props) => {
    const initialState = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    }
    const [{name, email, password, password_confirmation}, setField] = useState(initialState)
    const history = useHistory()
    let registerSelector = useSelector(state => ({
            authResponse: state.auth.authResponse,
            isAuthLoading: state.auth.isAuthLoading
        })
    )
    const dispatch = useDispatch()
    const onChange = (e) => {
        setField((prevState) => ({...prevState, [e.target.name]: e.target.value}))
    }
    const onRegister = (e) => {
        e.preventDefault()
        dispatch(RegisterAction({name, email, password, password_confirmation}))

        setField({...initialState})
        history.push('/user/login')
    }
    return (
        <>
            <Register
                {...props}
                onChange={onChange}
                onSubmit={onRegister}
                fields={{name, email, password, password_confirmation}}
                registerSelector={registerSelector}
            />
        </>
    )
}

export default reduxForm({
    form: 'register',
    validate
})(RegisterContainer)