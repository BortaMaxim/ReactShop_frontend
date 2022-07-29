import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {UserManagement} from "../Pages/Admin/UserManagement/UserManagement";
import {CategoryManagement} from "../Pages/Admin/CategoryManagement/CategoryManagement";
import ProfileContainer from "../Pages/Profile/ProfileContainer";
import {Cart} from "../Pages/Cart/Cart";

export const AdminRoutes = (props) => (
    <Switch>
        <Route  path={`${props.match.path}/admin/user`} component={UserManagement}/>
        <Route  path={`${props.match.path}/admin/category`} component={CategoryManagement}/>
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
