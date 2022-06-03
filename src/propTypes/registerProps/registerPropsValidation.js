import PropTypes from "prop-types";
import {withPropsValidation} from "../propsValidation";


const propTypes = {
    authResponse: PropTypes.object,
    isAuthLoading: PropTypes.bool,
}

export const registerPropsValidation = withPropsValidation(propTypes)