export let BASE_URL = 'http://localhost:8000/api/auth'
const token = localStorage.getItem('user-token')

export const postWithUploadOptions = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
        'Authorization': `Bearer `+token
    }
}
export const postOptions = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer `+token
    }
}
export const getOptions = {
    headers: {
        'Authorization': 'Bearer '+ token
    }
}