import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Box, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import classes from "../../../styles/Cart.module.css";
import {RedButton, YellowButton} from "../../../Components/FelpersComponent/Buttons/CustomButton";
import {switchAvatarsImgUrl} from "../../../helpers/switchAvatarsImgUrl";
import {usePagination} from "../../../hooks/usePagination";


const AdminTable = (props) => {
    const {data, handleEdit, handleDelete} = props
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
            <Table className={classes.cart_table}>
                <TableHead className={classes.cart_header}>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Avatar</TableCell>
                        <TableCell>Roles</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {_DATA.currentData().map((el) => (
                        <TableRow key={el.id}>
                            <TableCell>{el.id}</TableCell>
                            <TableCell>{el.name}</TableCell>
                            <TableCell>{el.email}</TableCell>
                            <TableCell>
                                <img className={classes.cart_img} src={switchAvatarsImgUrl(el.avatar)} alt={el.name}/>
                            </TableCell>
                            <TableCell>{el.roles}</TableCell>
                            <TableCell>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                                    <YellowButton style={{ marginRight: 20}} onClick={() => handleEdit(el.id)}>
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

AdminTable.propTypes = {
    data: PropTypes.array.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
}

export default AdminTable