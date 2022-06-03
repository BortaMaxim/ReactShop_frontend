import React from 'react'
import classes from '../../styles/Admin.module.css'
import PropTypes from 'prop-types'
import {List, ListItem, ListItemText, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export const SiteManagement = (props) => {
    const {profileSelector, roles} = props
    return (
        <>
            <Typography variant={'h6'} color={'primary'} align={'center'}>
                {profileSelector.profileResponse.data.roles}
            </Typography>
            {
                roles === 'admin'
                && <List>
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
                    <Link to={'/user/admin/product'} className={classes.admin_link}>
                        <ListItem button>
                            <ListItemText primary={'Product Management'}/>
                        </ListItem>
                    </Link>

                </List>
            }
            {
                roles === 'manager'
                && <List>
                    <Link to={'/user/admin/category'} className={classes.admin_link}>
                        <ListItem button>
                            <ListItemText primary={'Category Management'}/>
                        </ListItem>
                    </Link>
                    <Link to={'/user/admin/product'} className={classes.admin_link}>
                        <ListItem button>
                            <ListItemText primary={'Product Management'}/>
                        </ListItem>
                    </Link>
                </List>
            }
            <hr/>
        </>
    )
}

SiteManagement.propTypes = {
    profileSelector: PropTypes.object,
    roles: PropTypes.string,
}