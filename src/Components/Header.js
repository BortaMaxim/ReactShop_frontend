import React, {useEffect} from 'react'
import {Nav} from "./Nav";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {LogoutAction} from "../redux/actions/AuthAction";
import {FetchCategories, FetchCategoryGetOne} from "../redux/actions/CategoriesAction";
import {Fab, Toolbar} from "@mui/material";
import {ScrollToTop} from "./FelpersComponent/ScrollToTop";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export const Header = (props) => {
    const profileSelector = useSelector((state) => ({
        profileResponse: state.profile.profileResponse,
        loginSuccess: state.auth.authResponse
    }))
    const categoriesSelector = useSelector((state) => ({
        isCatLoading: state.categories.isCatLoading,
        categories: state.categories.categories,
        category: state.categories.category,
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

    const categoryGetOne = (id) => {
        history.push(`/category/${id}`)
        dispatch(FetchCategoryGetOne(id))
    }

    return (
        <>
            <Nav
                {...props}
                logout={logout}
                token={token}
                profileSelector={profileSelector}
                categoriesSelector={categoriesSelector}
                categoryGetOne={categoryGetOne}
            />
            <Toolbar id="back-to-top-anchor" />
            <ScrollToTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollToTop>
        </>
    )
}