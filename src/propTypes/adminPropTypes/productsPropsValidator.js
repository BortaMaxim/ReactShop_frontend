import PropTypes from 'prop-types'
import {withPropsValidation} from "../propsValidation";

const propTypes = {
    products: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    deleteSuccess: PropTypes.object.isRequired,
    isHide: PropTypes.bool,
}

export const productsPropsValidator = withPropsValidation(propTypes)