import React from 'react'
import {AdminRoutes} from "./AdminRoutes";
import {ManagerRoutes} from "./ManagerRoutes";
import {UserRoutes} from "./UserRoutes";


export const PrivateRoute = (props) => {
    const roles = localStorage.getItem('user-role')
    return (
        <>
            {
                roles === 'admin'
                    && <AdminRoutes {...props}/>
            }
            {
                roles === 'manager'
                && <ManagerRoutes {...props}/>
            }
            {
                roles === 'user'
                && <UserRoutes {...props}/>
            }
        </>
    )
}