import {useState} from "react";
import {getComments} from "../../services/API";

export default function Post({item: {id,userId, title},postsDril}) {
    const [comments, getCommentsPost] = useState([])



    return (

        <div>
            <h3>{id}--{userId}. {title}

                 <button onClick={() => {
                // postsDril(id);
           getComments(id).then(value => getCommentsPost(value.data))
            }

            }>Інформація про пости
            </button>
                </h3>

            {
                comments.map(value => <h5>{value.postId} --- {value.email}</h5>)
            }

        </div>

    )
}

