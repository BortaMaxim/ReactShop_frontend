export let AUTH_BASE_URL = 'http://localhost:8000/api/auth'
export const URL = 'http://localhost:8000/api'

export const postWithUploadOptions = (token) => {
    return {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': `Bearer `+token
        }
    }
}
export const postOptions = (token) => {
    return {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer `+token
        }
    }
}

export const getOptions = (token) => {
    return {
        headers: {
            'Authorization': 'Bearer '+ token
        }
    }
}