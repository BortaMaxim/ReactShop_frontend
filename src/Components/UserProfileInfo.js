import React from 'react'
import {Menu, MenuItem, Typography} from "@material-ui/core";
import classes from "../styles/Nav.module.css";
import AccountCircle from '@mui/icons-material/AccountCircle';
import {NavLink} from "react-router-dom";

export const UserProfileInfo = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>

            <AccountCircle
                style={{cursor: "pointer"}}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <NavLink to={'/user/profile'} activeClassName={classes.active} className={classes.link}>
                        <Typography variant={'h5'}>Profile</Typography>
                    </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Typography variant={'h5'} className={classes.link} onClick={props.logout}>
                        Logout
                    </Typography>
                </MenuItem>
            </Menu>
        </div>
    );

}