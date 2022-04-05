import React from 'react'
import classes from '../../styles/Profile.module.css'
import {CustomCircularProgress} from "../../Components/FelpersComponent/CustomCircularProgress";
import {Container} from "@mui/material";
import {ProfileCardInfo} from "./ProfileCardInfo";
import {EditProfile} from "./EditProfile";
import {useModal} from "../../hooks/useModal";
import {CustomModal} from "../../Components/FelpersComponent/CustomModal";
import {useHistory} from "react-router-dom";

const Profile = (props) => {
    const {
        profileSelector,
        errorResponse,
        onChangeProfile,
        onUploadChange,
        fields,
        isProfileLoading,
        isUpdating
    } = props
    const [editModalOpen, setEditModalOpen, editToggle] = useModal()
    const history = useHistory()
    const onUpdateProfile = (e) => {
        let formData = new FormData()
        formData.append('name', fields.name)
        formData.append('email', fields.email)
        formData.append('avatar', fields.avatar)
        formData.append('password', fields.password)
        formData.append('password_confirmation', fields.password_confirmation)
        e.preventDefault()
        props.UpdateProfileAction(formData, history)
    }
    return (
        <div>
            {
                isProfileLoading === true
                    ? <CustomCircularProgress/>
                    : <Container maxWidth={"sm"} className={classes.root}>
                        {
                            profileSelector.success === true
                            && <div className={classes.profile_wrapper}>
                                <ProfileCardInfo profile={profileSelector} toggle={editToggle}/>
                            </div>
                        }
                        <CustomModal
                            handleClose={() => setEditModalOpen(false)}
                            title={"Edit profile"}
                            isActive={editModalOpen}
                        >
                            <EditProfile
                                errorResponse={errorResponse}
                                isUpdating={isUpdating}
                                profile={profileSelector}
                                onChangeProfile={onChangeProfile}
                                onSubmit={onUpdateProfile}
                                fields={fields}
                                onUploadChange={onUploadChange}
                            />
                        </CustomModal>
                    </Container>
            }
        </div>
    )
}

export default Profile