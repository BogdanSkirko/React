import {useEffect, useState} from "react";

export default function Commentar() {

    let [comments, setComments] = useState([]);

        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(response => response.json())
                .then(objFromJson => {
                    setComments(objFromJson)
                });
            },[])
    return (
        <div>
            {
                comments.map(comments => <div>{comments.postId} - {comments.id} - {comments.name} - {comments.email} - {comments.body}</div>)
            }
        </div>
    )
}
