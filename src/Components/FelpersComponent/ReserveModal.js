import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {CardMedia} from "@mui/material";
import {switchProductsUrlImg} from '../../helpers/switchProductsImgUrl'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props) {
    const {el} = props
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <CardMedia
                component="img"
                height="150"
                image={switchProductsUrlImg(el.product_img)}
                alt={el.title}
                onClick={handleOpen}
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img style={{width: '100%', height: 400}} src={switchProductsUrlImg(el.product_img)} alt={el.title}/>
                </Box>
            </Modal>
        </div>
    );
}