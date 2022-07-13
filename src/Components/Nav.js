import React, {useEffect, useState} from 'react'
import classes from '../styles/Nav.module.css'
import PropTypes from 'prop-types'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {NavLink} from "react-router-dom";
import {AppBar, CssBaseline, Toolbar, Typography} from "@material-ui/core";
import {HideOnScroll} from "./FelpersComponent/HideOnScroll";
import {UserProfileInfo} from "./UserProfileInfo";
import {Avatar, Button, IconButton} from "@mui/material";
import {CustomModal} from "./FelpersComponent/CustomModal";
import {useModal} from "../hooks/useModal";
import {AvatarInfo} from "../Pages/Profile/AvatarInfo";
import {CustomDrawer} from "./FelpersComponent/CustomDrawer";
import MenuIcon from '@mui/icons-material/Menu';
import {useDispatch} from "react-redux";
import {ViewProfileAction} from "../redux/actions/ProfileAction";

export const Nav = (props) => {
    const {profileSelector, token, categoriesSelector, categoryGetOne, cartSelector} = props
    const [modalOpen, setModalOpen, toggleModal] = useModal()
    const [drawerOpen, setDrawerOpen] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if(token) {
            dispatch(ViewProfileAction())
        }
    }, [dispatch, token])

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen)
    }

    return (
        <>
            <CssBaseline/>
            <HideOnScroll {...props}>
                <AppBar className={classes.nav}>
                    <Toolbar className={classes.nav_wrapper}>
                        <div className={classes.nav_left}>
                            <IconButton onClick={handleDrawerToggle} color="inherit" >
                                <MenuIcon />
                            </IconButton>
                            <CustomDrawer
                                handleDrawerToggle={handleDrawerToggle}
                                drawerOpen={drawerOpen}
                                categoriesSelector={categoriesSelector}
                                categoryGetOne={categoryGetOne}
                                profileSelector={profileSelector}
                            />
                            <NavLink activeClassName={classes.active} className={classes.link} to={'/home'}>
                                <Typography variant={'h5'}>Home</Typography>
                            </NavLink>
                        </div>
                        {
                            token !== null && token !== ''
                                ? <div className={classes.nav_right}>
                                    {
                                        profileSelector.profileResponse.success === true
                                            ? <div className={classes.nav_profile}>
                                                <NavLink to={'/user/cart'} style={{textDecoration: "none"}}>
                                                    <Button variant={"contained"} color={'secondary'}>
                                                        <ShoppingCartIcon style={{color: '#ffffff'}}/>
                                                        {cartSelector ? cartSelector : ''}
                                                    </Button>
                                                </NavLink>
                                                <Avatar
                                                    src={`http://localhost:8000/avatars/${profileSelector.profileResponse.data.avatar}`}
                                                    onClick={toggleModal}
                                                />
                                                <Typography variant={'h5'} className={classes.profile_name}>
                                                    {profileSelector.profileResponse.data.name}
                                                </Typography>
                                            </div>
                                            : null
                                    }
                                    <UserProfileInfo {...props}/>
                                    <CustomModal
                                        title={"Avatar"}
                                        isActive={modalOpen}
                                        handleClose={() => setModalOpen(false)}
                                    >
                                        <AvatarInfo profileSelector={profileSelector}/>
                                    </CustomModal>
                                </div>
                                : <div className={classes.nav_right}>
                                    <NavLink to={'/user/login'} activeClassName={classes.active} className={classes.link}>
                                        <Typography variant={'h5'}>Login</Typography>
                                    </NavLink>
                                    <NavLink to={'/user/register'} activeClassName={classes.active}
                                             className={classes.link}>
                                        <Typography variant={'h5'}>Register</Typography>
                                    </NavLink>
                                </div>
                        }
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </>
    )
}

Nav.propTypes = {
    profileSelector: PropTypes.object.isRequired,
    token: PropTypes.string,
    categoriesSelector: PropTypes.object.isRequired,
    categoryGetOne: PropTypes.func.isRequired,
    cartSelector: PropTypes.number.isRequired,
}