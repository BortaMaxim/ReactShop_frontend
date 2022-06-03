import PropTypes from 'prop-types'
import {withPropsValidation} from "../propsValidation";

const propTypes = {
    isCreating: PropTypes.bool,
    createdResponse: PropTypes.object,
    isHide: PropTypes.bool,
    deleteSuccess: PropTypes.object,
    isShow: PropTypes.bool,
    download: PropTypes.bool,
    category: PropTypes.object,
    isUpdating: PropTypes.bool,
    updatedResponse: PropTypes.object,
    updatedError: PropTypes.object,
}

export const adminCategoriesPropTypesValidation = withPropsValidation(propTypes)