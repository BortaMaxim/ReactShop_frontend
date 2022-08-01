import {useState} from 'react'


export const useForm = (initialState = {}) => {
    const [fields, setFields] = useState(initialState)

    const handleChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }
    const handleUpload = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.files[0]
        })
    }

    const clear = () => {
        setFields(initialState)
    }

    return {fields, handleUpload, handleChange, clear}
}