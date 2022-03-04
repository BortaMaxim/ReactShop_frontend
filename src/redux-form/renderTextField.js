import {TextField} from "@material-ui/core";

export const renderTextField = (
    {
        label,
        input,
        meta: {touched, invalid, error},
        ...custom
    }
) => {
    return (
        <TextField
            fullWidth={true}
            label={label}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    )
}