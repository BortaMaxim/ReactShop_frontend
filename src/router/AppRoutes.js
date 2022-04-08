import React from 'react'
import {Header} from "../Components/Header";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Home} from "../Pages/Home/Home";
import LoginContainer from "../Pages/Login/LoginContainer";
import RegisterContainer from "../Pages/Register/RegisterContainer";
import {GuardRouter} from "./GuardRouter";
import {PrivateRoute} from "./PrivateRoute";
import {ProductItem} from "../Pages/Product/ProductItem";

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

                <GuardRouter
                    path={'/user'}
                    token={'user-token'}
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