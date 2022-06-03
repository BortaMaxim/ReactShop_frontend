import PropTypes from 'prop-types'
import {withPropsValidation} from "../propsValidation";

const propTypes = {
    isCatLoading: PropTypes.bool.isRequired,
    category: PropTypes.object,
    categories: PropTypes.array,
}

export const categoriesPropsValidation = withPropsValidation(propTypes)