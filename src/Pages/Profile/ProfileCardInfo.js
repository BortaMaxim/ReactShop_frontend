import React from 'react'
import classes from '../../styles/Profile.module.css'
import {Typography} from "@mui/material";


export const ProfileCardInfo = (props) => {
    const {profile} = props
    return (
        <div className={classes.profile_card_info}>
            <Typography variant={'h4'} color={'primary'} align={"center"}>{profile.profileResponse.message}</Typography>
            <div>
                <h4>Name: {profile.profileResponse.data.name}</h4>
                <h4>Email: {profile.profileResponse.data.email}</h4>
                <img src={` http://localhost:8000/`} alt={profile.profileResponse.data.name}/>
            </div>
        </div>
    )
}