import React from 'react'
import PropTypes from 'prop-types'
import {Typography} from "@mui/material";
import {AdminManagement} from "./AdminManagement";
import {ManagerManagement} from "./ManagerManagement";

export const SiteManagement = (props) => {
    const {profileSelector, roles} = props
    return (
        <>
            <Typography variant={'h6'} color={'primary'} align={'center'}>
                {profileSelector.profileResponse.data.roles}
            </Typography>
            {
                roles === 'admin'
                && <AdminManagement />
            }
            {
                roles === 'manager'
                && <ManagerManagement />
            }
            <hr/>
        </>
    )
}

SiteManagement.propTypes = {
    profileSelector: PropTypes.object,
    roles: PropTypes.string,
}