// import {getPosts, getUser, getUsers} from "./services/API";
// import {useEffect, useState} from "react";
// import Users from "./components/Users/Users";
//
// export default function App() {
//     const [user, setUser] = useState(null)
//     const [posts, setPosts] = useState(null)
//     const [users, setUsers] = useState([])
//     // const [getPost, setGetPost] = useState(null)
//     const userFunction = (id) => {
//         getUser(id).then(value => setUser(value.data))
//     }
//     const userFunctionPosts = (id) => {
//         getPosts(id).then(value => setPosts(value))
//     }
//     useEffect(() => {
//         getUsers().then(value => setUsers(value.data))
//     }, [])
//     return (
//         <div>
//             <Users items={users} userFunction={userFunction} userFunctionPosts={userFunctionPosts}/>
//         </div>
//
//     );
// }

//
// ===============================================================================================================================================================================
// import {useEffect, useState} from "react";
// import {getUser, getUsers} from "./services/API";
// import Users from "./components/Users/Users";
//
//
// export default function App() {
//     const [users, setUsers] = useState([])
//     const [user, setUser] = useState(null)
//
//     const functionButton = (id) => {
//         getUsers(id).then(value => console.log(value.data))
//     }
//     // const funcGetUser = (id) => {
//     //     getUser(id).then(value => setUser(value.data))
//     // }
//
//
//     useEffect(() => {
//         getUsers().then(value => setUsers(value.data))
//     }, [])
//     return (
//
//         <div>
//             <Users items={users} fcFromAppToUsers={functionButton}/>
//
//
//             {/*<h2>*/}
//             {/*    /!*{*!/*/}
//             {/*    /!*    user && <div>{JSON.stringify(user)}</div>*!/*/}
//             {/*    */}
//             {/*    /!*}*!/*/}
//             {/*</h2>*/}
//         </div>
//
//     );
// }
//


// =================================================================================
import {useEffect, useState} from "react";
import {getUsers, getUser, getPosts} from "./services/API";
import Users from "./components/Users/Users";


export default function App() {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState([])
    const getUserId = (id) => {
        getUser(id).then(value => setUser(value.data))
    }
    const getPosts1 = (id) => {
        getPosts(id).then(value => setPosts(value.data))
    }
    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    }, [])

    return (
        <div>
            <Users items={users} getId={getUserId} getPosts1={getPosts1}/>
        </div>

    );
}


