import React, {useEffect} from 'react'
import {Profile} from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {ViewProfileAction} from "../../redux/actions/ProfileAction";

const ProfileContainer = () => {
    const dispatch = useDispatch()
    const profileSelector = useSelector((state) => ({
        profileResponse: state.profile.profileResponse,
        loginSuccess: state.auth.authResponse,
        isProfileLoading: state.profile.isProfileLoading,
    }))


    useEffect(() => {
        dispatch(ViewProfileAction())
        return () => {
        }
    }, [dispatch])

    return (
        <div>
            <Profile profileSelector={profileSelector}/>
        </div>
    )
}

export default ProfileContainer