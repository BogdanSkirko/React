import axios from "axios";
const options =
    {
        baseURL: 'https://jsonplaceholder.typicode.com'
    }
const axiosInstance = axios.create(options)
axiosInstance('/users')

const getUsers = () => axiosInstance('/users')
const getUser = (id) => axiosInstance('/users/' + id)
const getPosts = (id) => axiosInstance('/users/' +id + '/posts')
export {getUsers,getUser,getPosts}