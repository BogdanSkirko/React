import {useEffect, useState} from "react";
import {getPost, getPosts} from "./services/API";
import Posts from "./components/Posts/Posts";

export default function App() {
    let [post, setPost] = useState()
    let [posts, setPosts] = useState([]);
    let funClick = (id) => {
        getPost(id).then(value => setPost(value.data))
    }
    useEffect(() => {
        getPosts().then(value => setPosts(value.data))
    }, []);
    return (
        <div>
            <Posts items={posts} funClick={funClick}/>
            <hr/>
            {

                <div>
                    {JSON.stringify(post)}
                    {console.log(JSON.stringify(post))}
                </div>

            }
            <hr/>
        </div>

    );
}

