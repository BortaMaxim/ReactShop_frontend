import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import ProfileContainer from "../Pages/Profile/ProfileContainer";
import {Cart} from "../Pages/Cart/Cart";
import {UserManagement} from "../Pages/Admin/UserManagement/UserManagement";
import {CategoryManagement} from "../Pages/Admin/CategoryManagement/CategoryManagement";
import {ProductManagement} from "../Pages/Admin/ProductsManagement/ProductManagement";


export const PrivateRoute = (props) => {
    const roles = localStorage.getItem('user-role')
    return (
        <>
            {
                roles === 'admin' || roles === 'manager'
                    // Auth User Admin, Manager
                    ? <Switch>
                        <Route  path={`${props.match.path}/admin/user`} component={UserManagement}/>
                        <Route  path={`${props.match.path}/admin/category`} component={CategoryManagement}/>
                        <Route  path={`${props.match.path}/admin/product`} component={ProductManagement}/>
                        <Route  path={`${props.match.path}/profile`} component={ProfileContainer}/>
                        <Route  path={`${props.match.path}/cart`} component={Cart}/>

                        <Route  path={props.match.path} render={props => (
                            <Redirect to={{pathname: `/home`}}/>
                        )}/>
                    </Switch>
                    // Auth User
                    : <Switch>
                        <Route  path={`${props.match.path}/profile`} component={ProfileContainer}/>
                        <Route  path={`${props.match.path}/cart`} component={Cart}/>
                        <Route  path={props.match.path} render={props => (
                            <Redirect to={{pathname: `/home`}}/>
                        )}/>
                        <Route  path="*" render={props => (
                            <Redirect to={{pathname: '/home'}}/>
                        )}/>
                    </Switch>
            }
        </>
    )
}