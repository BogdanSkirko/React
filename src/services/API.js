import axios from "axios";

let options =
    {baseURL: 'https://jsonplaceholder.typicode.com'}
const axiosInctance = axios.create(options)
axiosInctance('/users')

const getUsers = () => axiosInctance('/users')
const getUser = (id) => axiosInctance('/users/' + id)
const getPosts = (id) => axiosInctance('/users/' + id + '/posts')
const getComments = (id) => axiosInctance('/posts/' + id +'/comments')
export {getUsers,getUser,getPosts,getComments}