import {withPropsValidation} from "../propsValidation";
import PropTypes from 'prop-types'

const propTypes = {
    profileResponse: PropTypes.object,
    errorResponse: PropTypes.object,
    loginSuccess: PropTypes.object,
    isProfileLoading: PropTypes.bool,
    isUpdating: PropTypes.bool,
}

export const profilePropsValidation = withPropsValidation(propTypes)