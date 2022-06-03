import PropTypes from 'prop-types'
import {withPropsValidation} from "../propsValidation";


const propTypes = {
    isUsersFetching: PropTypes.bool,
    allUsers: PropTypes.array,
    isShow: PropTypes.bool,
    deleteSuccess: PropTypes.object,
    deleteError: PropTypes.object,
    isCreating: PropTypes.bool,
    createdResponse: PropTypes.object,
    isHide: PropTypes.bool,
}

export const usersPropsValidation = withPropsValidation(propTypes)