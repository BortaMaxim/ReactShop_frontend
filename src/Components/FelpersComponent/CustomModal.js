import * as React from 'react'
import {Backdrop, Box, Modal, Typography} from "@mui/material";
import PropTypes from "prop-types";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 300,
    overflow: 'scroll',
    minWidth: 200,
    backgroundColor: 'background.paper',
    border: 'none !important',
    boxShadow: 24,
    p: 2,
};

export const CustomModal = ({isActive, children, title, handleClose}) => {
    return (
        <Modal
            open={isActive}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 700,
            }}
        >
            <Box sx={style}>
                <Typography align={"center"} variant="h6" color={'primary'} component="h2">
                    {title}
                </Typography>
                {children}
            </Box>
        </Modal>
    )
}

CustomModal.propTypes = {
    isActive: PropTypes.bool,
    children: PropTypes.element,
    title: PropTypes.string,
    handleClose: PropTypes.func.isRequired,
}
