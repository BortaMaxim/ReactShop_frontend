import React from 'react'
import PropTypes from 'prop-types'
import {Box, Button, CircularProgress, TextField, Typography} from "@mui/material";


export const CategoryManagementCreate = (props) => {
    const {fields, handleChange, handleSubmit, createCategorySelector} = props

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box mt={4}>
                    {
                        createCategorySelector.createdResponse.status === 422
                        ? <div>
                                {
                                    createCategorySelector.isHide === false
                                    ? <Typography color={'secondary'}>
                                            {createCategorySelector.createdResponse.data.message}
                                    </Typography>
                                    : null
                                }
                            </div>
                        : null
                    }
                    {
                        createCategorySelector.createdResponse.success === true
                        ? <div>
                                {
                                    createCategorySelector.isHide === false
                                        ? <Typography color={'primary'}>
                                            {createCategorySelector.createdResponse.message}
                                        </Typography>
                                        : null
                                }
                            </div>
                        : null
                    }
                    <TextField
                        fullWidth={true}
                        name="category_name"
                        label="category"
                        value={fields.category_name}
                        onChange={handleChange}
                    />
                </Box>
                <Box mt={4}>
                    <Button type={'submit'} variant={'outlined'} color={'primary'}>
                        {
                            createCategorySelector.isCreating === true
                            ? <CircularProgress />
                            : <Typography>Create category</Typography>
                        }
                    </Button>
                </Box>
            </form>
        </>
    )
}

CategoryManagementCreate.propTypes = {
    fields: PropTypes.shape({
        category_name: PropTypes.string.isRequired
    }),
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    createCategorySelector: PropTypes.object.isRequired,
}