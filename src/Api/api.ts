import axios from "axios"
const instanse=axios.create(
    {
        baseURL:process.env.REACT_APP_API_BASE_URL
    }
)
console.log( process.env.REACT_APP_API_BASE_URL)
