import React from 'react';
import {Link} from "react-router-dom";
import classes from "../../styles/Admin.module.css";
import {List, ListItem, ListItemText} from "@mui/material";

export const ManagerManagement = () => {
    return (
        <div>
            <List>
                <Link to={'/user/admin/product'} className={classes.admin_link}>
                    <ListItem button>
                        <ListItemText primary={'Product Management'}/>
                    </ListItem>
                </Link>
            </List>
        </div>
    );
};
