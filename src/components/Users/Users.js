import {useEffect, useState} from "react";
import User from "../User/User";

export default function Users() {

    let [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(getUsers => {
                setUsers(getUsers)

            });
    }, [])
    return (
        <div>
            {
                users.map(users => <User item={users}/>)
            }

        </div>

    )
};


