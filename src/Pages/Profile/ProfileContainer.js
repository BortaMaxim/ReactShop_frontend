import React, {Component} from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {UpdateProfileAction, ViewProfileAction} from "../../redux/actions/ProfileAction";

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.profileResponse.success === true && this.props.profileResponse.data.name,
            email: this.props.profileResponse.success === true && this.props.profileResponse.data.email,
            avatar: '',
            password: '',
            password_confirmation: '',
        }
        this.onChangeProfile = this.onChangeProfile.bind(this)
        this.onUploadChange = this.onUploadChange.bind(this)
    }
    componentDidMount() {
        this.props.ViewProfileAction()
    }

    onChangeProfile(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onUploadChange(e) {
        this.setState({
            avatar: e.target.files[0]
        })
    }

    render() {
        return (
            <div>
                <Profile
                    profileSelector={this.props.profileResponse}
                    errorResponse={this.props.errorResponse}
                    UpdateProfileAction={this.props.UpdateProfileAction}
                    isProfileLoading={this.props.isProfileLoading}
                    isUpdating={this.props.isUpdating}
                    onChangeProfile={this.onChangeProfile}
                    onUploadChange={this.onUploadChange}
                    fields={this.state}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profileResponse: state.profile.profileResponse,
        errorResponse: state.profile.errorResponse,
        loginSuccess: state.auth.authResponse,
        isProfileLoading: state.profile.isProfileLoading,
        isUpdating: state.profile.isUpdating,
    }
}


export default connect(mapStateToProps, {
    ViewProfileAction,
    UpdateProfileAction
})(ProfileContainer)

