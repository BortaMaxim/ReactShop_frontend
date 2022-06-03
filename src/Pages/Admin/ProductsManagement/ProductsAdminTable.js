import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {
    Box,
    Pagination,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import classes from "../../../styles/Cart.module.css";
import {RedButton, YellowButton} from "../../../Components/FelpersComponent/Buttons/CustomButton";
import {switchProductsUrlImg} from "../../../helpers/switchProductsImgUrl";
import {usePagination} from "../../../hooks/usePagination";


export const ProductsAdminTable = (props) => {
    const {handleEdit, handleDelete, data, adminProductsSelector} = props

    const [page, setPage] = useState(1)
    const perPage = 3
    const count = Math.ceil(data.length / perPage)
    const _DATA = usePagination(data, perPage)

    const handleChange = (e, p) => {
        setPage(p)
        _DATA.jump(p)
    }

    return (
        <TableContainer component={Paper}>
            {
                adminProductsSelector.isHide === false
                ? <div>
                        {
                            adminProductsSelector.deleteSuccess.success === true
                            ? <Typography color={'primary'}>
                                    {adminProductsSelector.deleteSuccess.message}
                            </Typography>
                            : null
                        }
                    </div>
                : null
            }
            <Table className={classes.cart_table}>
                <TableHead className={classes.cart_header}>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Img</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                {
                    data.length !== 0
                        ? <TableBody>
                            {_DATA.currentData().map((el) => (
                                <TableRow key={el.id}>
                                    <TableCell>{el.id}</TableCell>
                                    <TableCell>{el.title}</TableCell>
                                    <TableCell>{el.price}</TableCell>
                                    <TableCell>
                                        <img className={classes.cart_img} src={switchProductsUrlImg(el.product_img)}
                                             alt={el.title}/>
                                    </TableCell>
                                    <TableCell>{el.category_id}</TableCell>
                                    <TableCell>
                                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                                            <YellowButton style={{marginRight: 20}} onClick={() => handleEdit(el.id)}>
                                                Edit
                                            </YellowButton>
                                            <RedButton onClick={() => handleDelete(el.id)}>
                                                Delete
                                            </RedButton>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                            }
                        </TableBody>
                        : null
                }
            </Table>
            <Box mt={4} mb={4} display={'flex'} justifyContent={'center'}>
                <Pagination
                    count={count}
                    size="large"
                    page={page}
                    variant="outlined"
                    shape="rounded"
                    onChange={handleChange}
                />
            </Box>
        </TableContainer>
    )
}

ProductsAdminTable.propTypes = {
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    adminProductsSelector: PropTypes.object.isRequired,
}