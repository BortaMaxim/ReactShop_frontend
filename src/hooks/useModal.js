import {useCallback, useState} from 'react'


export const useModal = (initialState = false) => {
    const [modalOpen, setModalOpen] = useState(initialState)
    const toggle = useCallback(() => setModalOpen(state => !state), [])
    return [modalOpen, setModalOpen, toggle]
}

export const useModalWithData = (
    initialMode = false,
    initialSelected = null
) => {
    const [modalOpen, setModalOpen] = useModal(initialMode)
    const [selected, setSelected] = useState(initialSelected)

    const setModalState = (state) => {
        setModalOpen(state)
        if (state === false) {
            setSelected(null)
        }
    }
    return {modalOpen, setModalOpen, selected, setSelected, setModalState}
}