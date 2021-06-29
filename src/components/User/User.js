import {getPosts} from "../../services/API";
import {useState} from "react";

export default function User({item,fnUser,fnPosts,items}) {
    const [usersPosts,setUsersPosts]=useState([])
    return (
        <div>
            {item.name} - {item.id}
            <button onClick={() => {return  fnUser(item.id)}}>Інформація про юзера</button>

            <hr/>

            <button onClick={() =>
            {getPosts(item.id).then(value => setUsersPosts(value.data))
            }
            }>Пости</button>
            <hr/>
        </div>

    );
}


