import React from 'react'
import classes from '../../styles/Profile.module.css'
import {Button, Typography} from "@mui/material";


export const ProfileCardInfo = (props) => {
    const {profile, toggle} = props
    return (
        <div className={classes.profile_card_info}>
            <Typography variant={'h4'} color={'primary'} align={"center"}>{profile.message}</Typography>
            <div>
                <h4>Name: {profile.data.name}</h4>
                <h4>Email: {profile.data.email}</h4>
                <img className={classes.profile_avatar} src={`http://localhost:8000/avatars/${profile.data.avatar}`}
                     alt={profile.data.name}/>
                <Button variant={"contained"} color={"primary"} onClick={toggle}>
                    Edit profile
                </Button>
            </div>
        </div>
    )
}