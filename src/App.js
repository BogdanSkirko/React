import {getPosts, getUser, getUsers} from "./services/API";
import {useEffect, useState} from "react";
import Users from "./components/Users/Users";

export default function App() {
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState(null)
    const [getPost, setGetPost] = useState(null)
    const userFunction = (id) => {
        getUser(id).then(value => setUser(value.data))
    }
    const userFunctionPosts = (id) => {
        getPosts(id).then(value => setPosts(value))
    }
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    }, [])
    return (
        <div>
            <Users items={users} userFunction={userFunction} userFunctionPosts={userFunctionPosts}/>
            <hr/>
            <p>Інформація про юзера</p>
            {
                user && <div>{JSON.stringify(user)}</div>
            }
            <hr/>
            <hr/>
            <p>Інформація про пости</p>
            {
                posts && <div>{JSON.stringify(posts)}</div>
            }

        </div>

    );
}

