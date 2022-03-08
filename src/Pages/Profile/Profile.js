import React from 'react'
import classes from '../../styles/Profile.module.css'
import {CustomCircularProgress} from "../../Components/FelpersComponent/CustomCircularProgress";
import {Card, Container} from "@mui/material";
import {ProfileCardInfo} from "./ProfileCardInfo";

export const Profile = (props) => {
    const {profileSelector} = props
    return (
        <div>
            {
                profileSelector.isProfileLoading === true
                    ? <CustomCircularProgress/>
                    : <Container maxWidth={"sm"} className={classes.root}>
                        {
                            profileSelector.profileResponse.success === true
                            && <div className={classes.profile_wrapper}>
                                <ProfileCardInfo profile={profileSelector}/>
                            </div>
                        }
                    </Container>
            }
        </div>
    )
}