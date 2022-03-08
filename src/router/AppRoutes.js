import React from 'react'
import {Header} from "../Components/Header";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {Home} from "../Pages/Home";
import LoginContainer from "../Pages/Login/LoginContainer";
import RegisterContainer from "../Pages/Register/RegisterContainer";
import {NoMatch} from "../Pages/NoMatch";
import {GuardRouter} from "./GuardRouter";
import {PrivateRoute} from "./PrivateRoute";

export const AppRoutes = (props) => {
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