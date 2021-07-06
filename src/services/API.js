import axios from "axios";

let options =
    {baseURL: 'https://jsonplaceholder.typicode.com'}
const axiosInctance = axios.create(options)
axiosInctance('/users')


// const getUsers = () => axiosInctance('/users')
// const getUser = (id) => axiosInctance('/users/' + id)
// const getPosts = (id) => axiosInctance('/posts' +id)
// const getComments = (id) => axiosInctance('/posts/' + id +'/comments')
const getUsersPosts = (id) => axiosInctance('/users/' +id)
const getUsers = () => axiosInctance('/users')
const getPosts = (id) => axiosInctance('/posts')
const getComments = (id) => axiosInctance('/posts/' +id + '/comments')
export {getPosts,getComments,getUsersPosts,getUsers}
