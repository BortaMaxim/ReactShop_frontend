import React from 'react'
import classes from '../../styles/Admin.module.css'
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography} from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {CustomCircularProgress} from "./CustomCircularProgress";
import {SiteManagement} from "../../Pages/Admin/SiteManagement";


const drawerWidth = 240;

export const CustomDrawer = ({categoriesSelector, categoryGetOne, drawerOpen, handleDrawerToggle, profileSelector}) => {

    const roles = localStorage.getItem('user-role')
    const drawer = (
        <div>
            <Toolbar/>
            <Divider/>
            <List>
                {
                    profileSelector.profileResponse.success === true
                    && <div className={classes.admin_wrapper}>
                        {
                            roles === 'admin' ||
                            roles === 'manager'
                                ? <SiteManagement profileSelector={profileSelector} roles={roles}/>
                                : null
                        }
                    </div>
                }
                <Typography variant={'h5'} color={'primary'} align={"center"}>Categories!</Typography>

                {categoriesSelector.categories.isCatLoading === true
                    ? <CustomCircularProgress/>
                    : <>
                        {
                            categoriesSelector.categories.length !== 0
                                ? <div>
                                    {
                                        categoriesSelector.categories.map((el) => (
                                            <ListItem button key={el.id} onClick={() => categoryGetOne(el.id)}>
                                                <ListItemIcon>
                                                    {el.id % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                                                </ListItemIcon>
                                                <ListItemText primary={el.name}/>
                                            </ListItem>
                                        ))
                                    }
                                </div>
                                : <Typography color={'secondary'}>No categories...</Typography>
                        }
                    </>
                }
            </List>
            <hr/>
            <Divider/>
        </div>
    );

    return (
        <div>
            <Drawer
                variant="temporary"
                sx={{
                    display: {xs: 'none', sm: 'block'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                }}
                open={drawerOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                {drawer}
            </Drawer>
        </div>
    )
}