import React from 'react';
import {Link} from "react-router-dom";
import classes from "../../styles/Admin.module.css";
import {List, ListItem, ListItemText} from "@mui/material";

export const AdminManagement = () => {
    return (
        <div>
            <List>
                <Link to={'/user/admin/user'} className={classes.admin_link}>
                    <ListItem button>
                        <ListItemText primary={'User Management'}/>
                    </ListItem>
                </Link>
                <Link to={'/user/admin/category'} className={classes.admin_link}>
                    <ListItem button>
                        <ListItemText primary={'Category Management'}/>
                    </ListItem>
                </Link>
            </List>
        </div>
    );
};
