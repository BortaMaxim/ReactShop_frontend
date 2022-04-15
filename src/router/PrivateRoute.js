import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import ProfileContainer from "../Pages/Profile/ProfileContainer";


export const PrivateRoute = (props) => {
    return (
        <Switch>
            <Route exact path={`${props.match.path}/profile`} component={ProfileContainer}/>
            <Route exact path={props.match.path} render={props => (
                <Redirect to={{pathname: `/`}}/>
            )}/>
        </Switch>
    )
}