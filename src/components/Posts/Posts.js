import {useEffect, useState} from "react";
import {getPosts} from "../../services/API";
import Post from "../Post/Post";

export default function Posts() {
    const [givePosts,setgivePosts]=useState([])
    useEffect(()=> {
        getPosts().then(value => setgivePosts(value.data))
    })
    return (
        <div>
            {givePosts.map((value => <Post key={value.id} items={value}/>))}
        </div>

    );
}

