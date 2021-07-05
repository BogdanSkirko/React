import {getPosts} from "../../services/API";
import {useState} from "react";

export default function User({items, id}) {
    const [getposts, setGetPosts] = useState([])

    return (
        <div>
            {items.name}---{items.id}
            <button onClick={() => {
                getPosts(id).then(value => setGetPosts(value.data))}}>Posts
            </button>


                    {
                        getposts.map(value =>  <h4>{value.userId}  {value.title}</h4>)
                    }


        </div>
    )
}

