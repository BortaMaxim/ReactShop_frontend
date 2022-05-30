import React from 'react'
import {Box, InputLabel, MenuItem, Select} from "@mui/material";

export const AdminSelect = (props) => {
    const {fields, onHandleChange} = props
    return (
        <Box mt={2}>
            <InputLabel id="role">role</InputLabel>
            <Select
                value={fields.roles || ''}
                autoWidth
                onChange={onHandleChange}
                name={'roles'}
            >
                <MenuItem value={'admin'}>
                    <em>Admin</em>
                </MenuItem>
                <MenuItem value={'manager'}>
                    <em>Manager</em>
                </MenuItem>
                <MenuItem value={'user'}>
                    <em>User</em>
                </MenuItem>
            </Select>
        </Box>
    )
}