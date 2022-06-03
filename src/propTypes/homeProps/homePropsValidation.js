import {withPropsValidation} from "../propsValidation";
import PropTypes from 'prop-types'

const propTypes = {
    isLoadProducts: PropTypes.bool,
    products: PropTypes.object,
}

export const homePropsValidation = withPropsValidation(propTypes)