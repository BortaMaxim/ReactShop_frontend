import PropTypes from 'prop-types'
import {withPropsValidation} from "../propsValidation";

const propTypes = {
    isLike: PropTypes.bool.isRequired,
    download: PropTypes.bool.isRequired,
    isDislike: PropTypes.bool.isRequired,
    likeResponse: PropTypes.object.isRequired,
    dislikeResponse: PropTypes.object.isRequired,
}

export const likesPropsValidation = withPropsValidation(propTypes)
