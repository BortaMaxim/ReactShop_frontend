import React, {useState} from 'react'
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
import {usePagination} from "../../../hooks/usePagination";


export const CategoryAdminTable = (props) => {
    const {data, handleEdit, handleDelete, deleteCategorySelector} = props
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
                deleteCategorySelector.isShow === true
                ? <div>
                        {
                            deleteCategorySelector.deleteSuccess.success === true
                                ? <Typography color={'primary'}>{deleteCategorySelector.deleteSuccess.message}</Typography>
                                : null
                        }
                    </div>
                : null
            }
            <Table className={classes.cart_table}>
                <TableHead className={classes.cart_header}>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {_DATA.currentData().map((el) => (
                        <TableRow key={el.id}>
                            <TableCell>{el.id}</TableCell>
                            <TableCell>{el.name}</TableCell>
                            <TableCell>
                                <YellowButton style={{ marginRight: 20}} onClick={() => handleEdit(el.id)}>
                                    Edit
                                </YellowButton>
                                <RedButton onClick={() => handleDelete(el.id)}>
                                    Delete
                                </RedButton>
                            </TableCell>
                        </TableRow>
                    ))
                    }
                </TableBody>
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