import {useState} from "react";
import {getPostsComments} from "../../services/API";

export default function Post({items :{id,title}}) {
    const [getcomments,setGetComments] = useState([])

    return (

        <div>
            {id} -- {title}
            <button onClick={() => {
            getPostsComments(id).then(value => setGetComments(value.data))}
            }>Coments</button>

            {getcomments.map(value =><div>{value.email}</div> )}

        </div>

    );
}

