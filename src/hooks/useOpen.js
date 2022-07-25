import {useState} from 'react';

export const useOpen = (initialState = {
    open: false,
    vertical: 'top',
    horizontal: 'left',
}) => {
    const [state, setState] = useState(initialState)
    const {open, vertical, horizontal} = state

    const handleOpen = (newState) => {
        setState({open: true, ...newState})
    }

    const handleClose = () => {
        setState({...state, open: false})
    }

    return {open, vertical, horizontal, handleClose, handleOpen}
};
