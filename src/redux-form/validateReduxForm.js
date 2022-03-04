const validateReduxForm = (values) => {
    const errors = []
    let requiredFields = [
        'name', 'email', 'password', 'password_confirmation'
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'required'
        }
    })
    if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
    }
    return errors
}

export default validateReduxForm