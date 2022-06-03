import React, {useEffect, useState} from 'react'
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {ViewProfileAction} from "../../redux/actions/ProfileAction";
import {profilePropsValidation} from "../../propTypes/profileProps/profilePropsValidation";

const ProfileContainer = () => {
    const dispatch = useDispatch()
    const profileSelector = profilePropsValidation(useSelector(state => ({
        profileResponse: state.profile.profileResponse,
        errorResponse: state.profile.errorResponse,
        loginSuccess: state.auth.authResponse,
        isProfileLoading: state.profile.isProfileLoading,
        isUpdating: state.profile.isUpdating,
    })))

    const [fields, setFields] = useState({...profileSelector.profileResponse.data})

    useEffect(() => {
        setFields(profileSelector.profileResponse.data)
    }, [profileSelector.profileResponse.data])

    useEffect(() => {
        dispatch(ViewProfileAction())
    }, [dispatch])

    const handleChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }

    const handleUpload = (e) => {
        setFields({
            ...fields,
            avatar: e.target.files[0]
        })
    }

    return (
        <div>
            <Profile
                profileSelector={profileSelector}
                handleChange={handleChange}
                handleUpload={handleUpload}
                fields={fields}
            />
        </div>
    )
}

export default ProfileContainer

