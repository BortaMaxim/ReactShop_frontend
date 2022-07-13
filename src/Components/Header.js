import React, {useEffect} from 'react'
import {Nav} from "./Nav";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {LogoutAction} from "../redux/actions/AuthAction";
import {FetchCategories, FetchCategoryGetOne} from "../redux/actions/CategoriesAction";
import {Fab, Toolbar} from "@mui/material";
import {ScrollToTop} from "./FelpersComponent/ScrollToTop";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {profilePropsValidation} from "../propTypes/profileProps/profilePropsValidation";
import {categoriesPropsValidation} from "../propTypes/categoriesProps/categoriesPropsValidation";


export const Header = (props) => {
    const profileSelector = profilePropsValidation(useSelector((state) => ({
        profileResponse: state.profile.profileResponse,
        loginSuccess: state.auth.authResponse
    })))
    const categoriesSelector = categoriesPropsValidation(useSelector((state) => ({
        isCatLoading: state.categories.isCatLoading,
        categories: state.categories.categories,
        category: state.categories.category,
    })))
    const cartSelector = useSelector(state => state.cart.numberCart)

    const dispatch = useDispatch()
    const history = useHistory()

    const logout = () => {
        dispatch(LogoutAction())
        localStorage.clear()
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
                cartSelector={cartSelector}
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