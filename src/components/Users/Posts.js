import {useEffect, useState} from "react";

export default function Posts({postId}) {

    let [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(getPosts =>
                setPosts(getPosts)
            );
    }, [])


const filter = posts.filter(value => value.userId===postId)


    return (
        <div>
            {
                filter.map(posts => <div>{posts.userId} - {posts.id} - {posts.title} - {posts.body} </div>)
            }
        </div>

    );
}



