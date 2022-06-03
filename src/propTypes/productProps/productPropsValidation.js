import {withPropsValidation} from "../propsValidation";
import PropTypes from 'prop-types'

const propTypes = {
    filteredProducts: PropTypes.array,
    isFilteringProducts: PropTypes.bool,
    product: PropTypes.object,
    isLoadProducts: PropTypes.bool
}

export const productPropsValidation = withPropsValidation(propTypes)