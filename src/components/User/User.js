// import {getPosts} from "../../services/API";
// import {useState} from "react";
// import Post from "../Post/Post";
//
// export default function User({item, userDril, postsDril}) {
//     const [userPosts, setUserPosts] = useState([]);
//     const [toggle, setToggle] = useState(false);
//
//     return (
//         <div>
//
//             <h2> {item.name} - {item.id} -
//
//                 {/*<button onClick={() => userDril(item.id)}>Інформація про юзера</button>*/}
//                 <button onClick={() => {
//                     setToggle(!toggle);
//                     postsDril(item.id);
//                     getPosts(item.id).then(value => setUserPosts(value.data))
//
//                 }
//
//                 }>Інформація
//                 </button>
//             </h2>
//
//             {toggle && userPosts && userPosts.map(value => <Post item={value}/>)}
//
//
//         </div>
//
//     );
// }
// =====================================
// export default function User({item,fcFromUsersToUser}) {
//
//     return (
//
//         <div>
//             <h2>
//             {item.id} - {item.name}
//             <button onClick={() => {
//                 fcFromUsersToUser(item.id);}}
//                 >Details</button>
//                 </h2>
//             <hr/>
//
//             <hr/>
//
//         </div>
//
//     );
// }

// =================================================================================================


import {getPosts} from "../../services/API";
import {useState} from "react";
import Post from "../Post/Post";

export default function User({item,}) {
    const [userPosts, setUserPosts] = useState([])
    const [toggle, setToggle] =useState(false)
    return (
        <div>
            <div>
                <h2>
                {item.id}---{item.name}---
                <button onClick={() => {
                    setToggle(!toggle);
                    getPosts(item.id).then(value => setUserPosts(value.data))

                }}>Click for Details</button>
                    </h2>
            </div>
            <div>
            {
               toggle && userPosts && userPosts.map(value => <Post key={value.id} item={value}/>)
            }
            </div>
        </div>

    );
}

