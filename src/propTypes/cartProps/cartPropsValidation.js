import PropTypes from 'prop-types'
import {withPropsValidation} from "../propsValidation";

const propTypes = {
    cart: PropTypes.object,
    carts: PropTypes.array,
}

export const cartPropsValidation = withPropsValidation(propTypes)