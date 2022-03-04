import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import {Profile} from "../Pages/Profile";


export const PrivateRoute = (props) => {
    return (
        <Switch>
            <Route exact path={`${props.match.path}/profile`} component={Profile}/>
            <Route exact path={props.match.path} render={props => (
                <Redirect to={{pathname: `${props.match.path}/profile`}}/>
            )}/>
        </Switch>
    )
}