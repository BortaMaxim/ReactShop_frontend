import PropTypes from 'prop-types'
import {withPropsValidation} from "../propsValidation";

const propTypes = {
    loading: PropTypes.bool.isRequired,
    comments: PropTypes.array.isRequired,
    message: PropTypes.object.isRequired,
    isCommentSending: PropTypes.bool.isRequired,
}

export const commentsPropsValidation = withPropsValidation(propTypes)