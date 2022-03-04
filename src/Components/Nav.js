import React from 'react'
import classes from '../styles/Nav.module.css'
import {NavLink} from "react-router-dom";
import {AppBar, CssBaseline, Toolbar, Typography} from "@material-ui/core";
import {HideOnScroll} from "./FelpersComponent/HideOnScroll";

export const Nav = (props) => {
    return (
        <>
            <CssBaseline/>
            <HideOnScroll {...props}>
                <AppBar className={classes.nav}>
                    <Toolbar className={classes.nav_wrapper}>
                        <div>
                            <NavLink activeClassName={classes.active} className={classes.link} to={'/home'}>
                                <Typography variant={'h5'}>Home</Typography>
                            </NavLink>
                        </div>
                        <div className={classes.nav_right}>
                            <NavLink to={'/user/login'} activeClassName={classes.active} className={classes.link}>
                                <Typography variant={'h5'}>Login</Typography>
                            </NavLink>
                            <NavLink to={'/user/register'} activeClassName={classes.active} className={classes.link}>
                                <Typography variant={'h5'}>Register</Typography>
                            </NavLink>
                        </div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </>
    )
}