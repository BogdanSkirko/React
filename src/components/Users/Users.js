import {useEffect, useState} from "react";
import {getUsers} from "../../services/API";
import User from "../User/User";

export default function Users() {
    const [users,setUsers] = useState([])
    useEffect(()=> {
        getUsers().then(value => setUsers(value.data))
    },[])
    return (
        <div>
            {users.map((value => <User key={value.id} items={value}/>))}
        </div>

    );
}

