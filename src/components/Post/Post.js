// import {useState} from "react";
// import {getComments} from "../../services/API";
//
// export default function Post({item: {id,userId, title}}) {
//     const [comments, getCommentsPost] = useState([])
//
//
//
//     return (
//
//         <div>
//             <h3>{id}--{userId}--- {title}
//
//                  <button onClick={() => {
//
//            getComments(id).then(value => getCommentsPost(value.data))
//             }
//
//             }>Details
//             </button>
//                 </h3>
//
//             {
//                 comments.map(value => <h5>{value.postId} --- {value.email}</h5>)
//             }
//
//         </div>
//
//     )
// }
//
//
//


// ======================================
// export default function Post({item}) {
//     return (
//         <div>
//             <h2>
//                 {item.id} asdfdsaf
//             </h2>
//         </div>
//
//     );
// }

// =======================================================================================

import {useState} from "react";
import {getComments} from "../../services/API";
export default function Post({item: {id, userId, title}}) {
    const [comments, setCommentsPost] = useState([])
    return (
        <div>
            <h4>

                {id} -- {userId} --- {title}

                <button onClick={() => {
                    getComments(id).then(value => setCommentsPost(value.data))

                }
                }>getEmail(Comments)
                </button>

            </h4>

            {
                comments.map(value => <h3>{value.email})</h3>)
            }

        </div>

    );
}

