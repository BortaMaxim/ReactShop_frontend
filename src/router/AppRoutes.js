import React from 'react'
import {Header} from "../Components/Header";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Home} from "../Pages/Home/Home";
import LoginContainer from "../Pages/Login/LoginContainer";
import RegisterContainer from "../Pages/Register/RegisterContainer";
import {GuardRouter} from "./GuardRouter";
import {PrivateRoute} from "./PrivateRoute";
import {ProductItem} from "../Pages/Product/ProductItem";
import {Category} from "../Pages/Category/Category";
import {FilteringProducts} from "../Pages/Product/FilteringProducts";
import {NoMatch} from "../Pages/NoMatch";
import {UserManagementEdit} from "../Pages/Admin/UserManagement/UserManagementEdit";
import {UserManagementCreate} from "../Pages/Admin/UserManagement/UserManagementCreate";
import {CategoryManagementEdit} from "../Pages/Admin/CategoryManagement/CategoryManagementEdit";
import {ProductAdminCreateForm} from "../Pages/Admin/ProductsManagement/ProductAdminCreateForm";
import {ProductAdminEdit} from "../Pages/Admin/ProductsManagement/ProductAdminEdit";
import {EmailVerifiedSuccess} from "../Pages/EmailVerified/EmailVerifiedSuccess";
import {EmailAlreadyVerified} from "../Pages/EmailVerified/EmailAlreadyVerified";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/user/login">
                    <LoginContainer/>
                </Route>
                <Route path="/user/register">
                    <RegisterContainer/>
                </Route>
                <Route path="/product-item/:id">
                    <ProductItem />
                </Route>
                <Route path="/category/:id">
                    <Category />
                </Route>
                <Route path="/products/search/q.:slug">
                    <FilteringProducts />
                </Route>
                <Route path="/user/admin/user/edit/:id">
                    <UserManagementEdit />
                </Route>
                <Route path={'/user/admin/user/create'}>
                    <UserManagementCreate />
                </Route>
                <Route path="/user/admin/category/edit/:id">
                    <CategoryManagementEdit />
                </Route>
                <Route path="/user/admin/product/create">
                    <ProductAdminCreateForm />
                </Route>
                <Route path="/user/admin/product/edit/:id">
                    <ProductAdminEdit />
                </Route>
                <Route path="/email-verified-success">
                    <EmailVerifiedSuccess />
                </Route>
                <Route path="/email-already-verified">
                    <EmailAlreadyVerified />
                </Route>
                <Route path={'/no-match'}>
                    <NoMatch />
                </Route>
                <GuardRouter
                    path={'/user'}
                    tokenVerified={'email-verified'}
                    routeRedirect={'/user/login'}
                    component={PrivateRoute}
                />
                <Route exact path="*" render={props => (
                    <Redirect to={{pathname: '/home'}}/>
                )}/>

            </Switch>
        </BrowserRouter>
    )
}