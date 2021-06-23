import {useEffect, useState} from "react";
import User from "./User";

export default function Users() {

    let [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(usersFromJson => {
                setUsers(usersFromJson)
            });
    },[]);

        return (
            <div>
                {
                    users.map(user => <User item ={user}/>)
                }
            </div>

        );
    }

