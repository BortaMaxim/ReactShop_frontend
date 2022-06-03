import PropTypes from "prop-types"

export const withPropsValidation = (propTypes) => {
    return (props) => {
        PropTypes.checkPropTypes(propTypes, props, 'props', '')
        return props
    }
}
