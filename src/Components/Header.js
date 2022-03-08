import React from 'react'
import {Nav} from "./Nav";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {LogoutAction} from "../redux/actions/AuthAction";

export const Header = (props) => {
    const profileSelector = useSelector((state) => ({
        profileResponse: state.profile.profileResponse,
        loginSuccess: state.auth.authResponse
    }))
    const dispatch = useDispatch()
    const history = useHistory()
    const logout = () => {
        dispatch(LogoutAction())
        history.push('/user/login')
    }
    const token = localStorage.getItem('user-token')
    return (
        <Nav
            {...props}
            logout={logout}
            token={token}
            profileSelector={profileSelector}
        />

    )
}