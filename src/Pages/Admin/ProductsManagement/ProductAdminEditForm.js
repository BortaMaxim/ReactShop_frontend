import React from 'react';
import classes from "../../../styles/Auth.module.css";
import {Box, Button, CircularProgress, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";

const ProductAdminEditForm = (props) => {
    const {fields, handleChange, handleSubmit, handleUpload, selector} = props
    return (
        <Box className={classes.auth_wrapper} mt={4}>
            <form onSubmit={handleSubmit}>
                {
                    selector.isHide === false
                        ? <div>
                            {
                                selector.updatedSuccess.success === true
                                    ? <Typography color={'primary'}>
                                        {selector.updatedSuccess.message}
                                    </Typography>
                                    : null
                            }
                        </div>
                        : null
                }
                <Box mt={2}>
                    {
                        selector.updatedError.status === 422
                            ? <Typography color={'secondary'}>
                                {selector.updatedError.data.errors.title}
                            </Typography>
                            : null
                    }
                    <TextField
                        fullWidth={true}
                        name={'title'}
                        label={'title'}
                        value={fields.title || ''}
                        onChange={handleChange}
                    />
                </Box>
                <Box mt={2}>
                    {
                        selector.updatedError.status === 422
                            ? <Typography color={'secondary'}>
                                {selector.updatedError.data.errors.description}
                            </Typography>
                            : null
                    }
                    <TextField
                        fullWidth={true}
                        name={'description'}
                        label={'description'}
                        value={fields.description || ''}
                        onChange={handleChange}
                    />
                </Box>
                <Box mt={2}>
                    {
                        selector.updatedError.status === 422
                            ? <Typography color={'secondary'}>
                                {selector.updatedError.data.errors.price}
                            </Typography>
                            : null
                    }
                    <TextField
                        fullWidth={true}
                        name={'price'}
                        type={'number'}
                        label={'price'}
                        value={fields.price || ''}
                        onChange={handleChange}
                    />
                </Box>
                <Box mt={2}>
                    {
                        selector.updatedError.status === 422
                            ? <Typography color={'secondary'}>
                                {selector.updatedError.data.errors.product_img}
                            </Typography>
                            : null
                    }
                    <input
                        type="file"
                        name={'product_img'}
                        onChange={handleUpload}
                    />
                </Box>
                <Box mt={2}>
                    <InputLabel id="category">Category</InputLabel>
                    {
                        selector.categories.length !== 0
                        && <Select
                            labelId="category"
                            name={'category_id'}
                            autoWidth
                            label="category"
                            onChange={handleChange}
                            value={fields.category_id || 1}
                        >
                            {
                                selector.categories.map(el => (
                                    <MenuItem value={el.id} key={el.id}>
                                        <em>{el.name}</em>
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    }
                </Box>
                <Box mt={2}>
                    <Button type={'submit'} variant={'outlined'} color={'primary'}>
                        {
                            selector.isUpdating === true
                                ? <CircularProgress/>
                                : <Typography>
                                    Update Product
                                </Typography>
                        }
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default ProductAdminEditForm;