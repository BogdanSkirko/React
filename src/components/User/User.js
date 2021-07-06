import {useState} from "react";
import {getPosts} from "../../services/API";

export default function User({items: {name, id}}) {
    const [usersPosts, getUsersPosts] = useState([])
    return (
        <div>
            {id}--{name}

            <button onClick={() => {
                getPosts(id).then(value => getUsersPosts(value.data))}
            }>UsersPosts</button>
            {usersPosts.map(value => <h3>{value.id} {value.title} {value.body}</h3>)}
        </div>

    );
}

