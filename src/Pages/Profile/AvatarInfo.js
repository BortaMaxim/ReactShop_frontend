import React from 'react'
import PropTypes from "prop-types";

export const AvatarInfo = (props) => {
    const {profileSelector} = props
    return (
        <div>
            {
                profileSelector.profileResponse.success === true
                    ? <img
                        src={`http://localhost:8000/avatars/${profileSelector.profileResponse.data.avatar}`}
                        alt={profileSelector.profileResponse.data.name}
                        style={{width: '100%'}}
                    />
                    : null
            }

        </div>
    )
}

AvatarInfo.propType = {
    profileSelector: PropTypes.object
}