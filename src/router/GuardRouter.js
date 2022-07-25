import React from 'react'
import {Route, Redirect} from "react-router-dom";

export const GuardRouter = ({component: Component, tokenVerified: Token, routeRedirect, ...rest}) => {
    return (
        <Route {...rest} component={(props) => (
            localStorage.getItem(Token)
                ? <Component {...props}/>
                : <Redirect to={{pathname: routeRedirect, state: {from: props.location}}}/>
        )}/>
    )
}