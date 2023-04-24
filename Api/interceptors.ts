import axios from "axios"

axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('auth_token')}`
    return config
})