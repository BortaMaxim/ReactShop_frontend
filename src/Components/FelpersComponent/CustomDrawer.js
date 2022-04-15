import React from 'react'
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography} from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {CustomCircularProgress} from "./CustomCircularProgress";


const drawerWidth = 240;

export const CustomDrawer = (props) => {
    const {categoriesSelector, categoryGetOne, drawerOpen, handleDrawerToggle} = props

    const drawer = (
        <div>
            <Toolbar/>
            <Divider/>
            <List>
                <Typography variant={'h5'} color={'primary'} align={"center"}>Categories!</Typography>
                {
                    categoriesSelector.categories.status === 200
                    && <>
                        {categoriesSelector.categories.isCatLoading === true
                            ? <CustomCircularProgress />
                            : <>
                                {
                                    categoriesSelector.categories.data.map((el) => (
                                        <ListItem button key={el.id} onClick={() => categoryGetOne(el.id)}>
                                            <ListItemIcon>
                                                {el.id % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                                            </ListItemIcon>
                                            <ListItemText primary={el.name}/>
                                        </ListItem>
                                    ))
                                }
                            </>
                        }
                    </>
                }
            </List>
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