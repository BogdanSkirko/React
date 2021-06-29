import axios from "axios";
const options =
    {
        baseURL: 'https://jsonplaceholder.typicode.com'
    }
const axiosInstance = axios.create(options)
axiosInstance('/users')

const getUsers = axiosInstance('/users')