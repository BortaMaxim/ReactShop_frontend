import {withPropsValidation} from "../propsValidation";
import PropTypes from "prop-types";


const propTypes = {
    authResponse: PropTypes.object,
    isAuthLoading: PropTypes.bool,
    emailError: PropTypes.object,
    isHide: PropTypes.bool,
}

export const loginPropsValidation = withPropsValidation(propTypes)