import React, {useEffect} from 'react'
import {Nav} from "./Nav";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {LogoutAction} from "../redux/actions/AuthAction";
import {FetchCategories} from "../redux/actions/CategoriesAction";

export const Header = (props) => {
    const profileSelector = useSelector((state) => ({
        profileResponse: state.profile.profileResponse,
        loginSuccess: state.auth.authResponse
    }))
    const categoriesSelector = useSelector((state) => ({
        isCatLoading: state.categories.isCatLoading,
        categories: state.categories.categories,
    }))
    const dispatch = useDispatch()
    const history = useHistory()
    const logout = () => {
        dispatch(LogoutAction())
        history.push('/user/login')
    }
    const token = localStorage.getItem('user-token')

    useEffect(() => {
        dispatch(FetchCategories())
        return () => {}
    }, [dispatch])

    return (
        <Nav
            {...props}
            logout={logout}
            token={token}
            profileSelector={profileSelector}
            categoriesSelector={categoriesSelector}
        />

    )
}