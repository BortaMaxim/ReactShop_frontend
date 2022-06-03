import React from 'react'
import PropTypes from 'prop-types'
import {Box, Button, CircularProgress, TextField, Typography} from "@mui/material";
import classes from "../../../styles/Auth.module.css";


export const CategoryManagementUpdateForm = (props) => {
    const {fields, handleChange, handleSubmit, updateCategorySelector} = props

    return (
        <form onSubmit={handleSubmit}>
            <Box mt={4} className={classes.auth_wrapper}>
                {
                    updateCategorySelector.updatedError.status === 422
                        ? <div>
                            {
                                updateCategorySelector.isHide === false
                                    ? <Typography color={'secondary'}>
                                        {updateCategorySelector.updatedError.data.message}
                                    </Typography>
                                    : null
                            }
                        </div>
                        : null
                }
                {
                    updateCategorySelector.updatedResponse.success === true
                    ? <div>
                            {
                                updateCategorySelector.isHide === false
                                ? <Typography color={'primary'}>
                                        {updateCategorySelector.updatedResponse.message}
                                </Typography>
                                : null
                            }
                        </div>
                    : null
                }
                <Box mt={4}>
                    <TextField
                        fullWidth={true}
                        name="name"
                        label="category edit"
                        value={fields.name || ''}
                        onChange={handleChange}
                    />
                </Box>
                <Box mt={2}>
                    <Button type={'submit'} variant={'outlined'} color={'primary'}>
                        {
                            updateCategorySelector.isUpdating === true
                            ? <CircularProgress />
                            : <Typography>Update</Typography>
                        }
                    </Button>
                </Box>
            </Box>
        </form>
    )
}

CategoryManagementUpdateForm.propTypes = {
    fields: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateCategorySelector: PropTypes.object.isRequired,
}