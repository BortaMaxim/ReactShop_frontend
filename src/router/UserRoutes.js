import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import ProfileContainer from "../Pages/Profile/ProfileContainer";
import {Cart} from "../Pages/Cart/Cart";

export const UserRoutes = (props) => (
    <Switch>
        <Route  path={`${props.match.path}/profile`} component={ProfileContainer}/>
        <Route  path={`${props.match.path}/cart`} component={Cart}/>

        <Route  path={props.match.path} render={props => (
            <Redirect to={{pathname: `${props.match.path}/profile`}}/>
        )}/>
        <Route  path="*" render={props => (
            <Redirect to={{pathname: '/home'}}/>
        )}/>
    </Switch>
);
