import {useEffect, useState} from "react";
import {getUser, getUsers} from "./services/API";
import Users from "./components/Users/Users";




export default function App() {
    let funcUsers = (id) => {
        getUser(id).then(value => setUser(value.data))
    }
    const [user,setUser] = useState(null)
    const [users,setUsers] = useState([])
    useEffect(()=> {
        getUsers().then(value => setUsers(value.data))
    },[])

    return (
        <div>

            <Users items={users} funcUsers={funcUsers}/>
            {
                user && <div>{JSON.stringify(user)}</div>
            }

        </div>

    );
}

