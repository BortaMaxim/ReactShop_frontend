import PropTypes from 'prop-types'
import {withPropsValidation} from "../propsValidation";

const propTypes = {
    isChecking: PropTypes.bool.isRequired,
    checkoutSuccess: PropTypes.object.isRequired,
    checkoutError: PropTypes.object.isRequired,
}

export const checkoutPropsValidation = withPropsValidation(propTypes)