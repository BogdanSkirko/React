import {useEffect, useState} from "react";
import {getPosts, getUser, getUsers} from "./services/API";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";

export default function App() {
    let funcUsers = (id) => {
        getUser(id).then(value => setUser(value.data))
    }
    let funcPosts = (id) => {
        getPosts(id).then(value => setPosts(value.data))
    }
    const [user,setUser] = useState(null)
    const [users,setUsers] = useState([])
    const [posts,setPosts] = useState([])
    useEffect(()=> {
        getUsers().then(value => setUsers(value.data))
    },[])
    useEffect(()=> {
        getPosts().then(value => setPosts(value.data))
    },[])
    return (
        <div>

            <Users items={users} funcUsers={funcUsers}/>
            {
                user && <div>{JSON.stringify(user)}</div>
            }
            <Posts posts={posts} funcPosts={funcPosts}/>

        </div>

    );
}

