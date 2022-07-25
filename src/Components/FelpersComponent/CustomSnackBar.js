import React from 'react';
import PropTypes from 'prop-types';
import {Snackbar} from "@mui/material";

export const CustomSnackBar = ({message, open, handleClose, vertical, horizontal}) => {

    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message={message}
                key={vertical + horizontal}
            />
        </div>
    );
};

CustomSnackBar.propTypes = {
    message: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    vertical: PropTypes.string.isRequired,
    horizontal: PropTypes.string.isRequired,
};
