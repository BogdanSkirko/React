import axios from 'axios';

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com'
}

let axiosInstance = axios.create(options);
const getPosts = () => axiosInstance('/posts');
const getPost = (id) => axiosInstance('/posts/' + id)
export {getPosts,getPost};