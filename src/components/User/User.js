import {getUserPosts} from "../../services/API";
import {useState} from "react";

export default function User({items : {id, name}}) {
    const [getposts, setGetPosts] = useState([])
    return (
        <div>
            {name}---{id}

            <button onClick={() => {
                getUserPosts(id).then(value => setGetPosts(value.data))}}>Posts
            </button>

                    {
                        getposts.map(value => <h4>{value.id}  {value.body}  {value.title}</h4>)
                    }


        </div>
    )
}

