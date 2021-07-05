import {useEffect, useState} from "react";
import {getPosts} from "../../services/API";
import Post from "../Post/Post";

export default function Posts() {
    const [posts,setPosts] = useState([])
    useEffect(()=> {
        getPosts().then(value => setPosts(value.data))
        },[])
    return (
        <div>
            {posts.map((value => <Post key={value.id} items={value}/>))}
        </div>

    );
}

