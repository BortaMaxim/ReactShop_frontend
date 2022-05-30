import React from 'react'
import classes from '../../styles/Profile.module.css'
import {CustomCircularProgress} from "../../Components/FelpersComponent/CustomCircularProgress";
import {Container} from "@mui/material";
import {ProfileCardInfo} from "./ProfileCardInfo";
import {EditProfile} from "./EditProfile";
import {useModal} from "../../hooks/useModal";
import {CustomModal} from "../../Components/FelpersComponent/CustomModal";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {UpdateProfileAction} from "../../redux/actions/ProfileAction";

const Profile = (props) => {
    const {fields, handleChange, handleUpload, profileSelector} = props
    const [editModalOpen, setEditModalOpen, editToggle] = useModal()
    const history = useHistory()
    const dispatch = useDispatch()

    const onUpdateProfile = (e) => {
        let formData = new FormData()
        formData.append('name', fields.name)
        formData.append('email', fields.email)
        formData.append('avatar', fields.avatar)
        formData.append('password', fields.password)
        formData.append('password_confirmation', fields.password_confirmation)
        e.preventDefault()
        dispatch(UpdateProfileAction(formData, history))
    }
    return (
        <div>
            {
                profileSelector.isProfileLoading === true
                    ? <CustomCircularProgress/>
                    : <Container maxWidth={"sm"} className={classes.root}>
                        {
                            profileSelector.profileResponse.success === true
                            && <div className={classes.profile_wrapper}>
                                <ProfileCardInfo profile={profileSelector.profileResponse} toggle={editToggle}/>
                            </div>
                        }
                        <CustomModal
                            handleClose={() => setEditModalOpen(false)}
                            title={"Edit profile"}
                            isActive={editModalOpen}
                        >
                            <EditProfile
                                profileSelector={profileSelector}
                                handleChange={handleChange}
                                onSubmit={onUpdateProfile}
                                fields={fields}
                                handleUpload={handleUpload}
                            />
                        </CustomModal>
                    </Container>
            }
        </div>
    )
}

export default Profile