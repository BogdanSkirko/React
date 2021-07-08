import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import User from "../User/User";
// import {BrowserRouter as Router, Link, Route} from "react-router-dom";

export default function Users() {
    const users = useSelector(({users}) => users)
    const dispatch = useDispatch()
    const fetchUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch({
                type: 'USERS',
                payload: json
            }))
    }
    useEffect(() => {
        fetchUsers();
    },[])


    return (
       <div>
                {users.map(user => (
               <h1 key={user.id}> {user.id}----{user.name}</h1>
           ))}



            <User />
       </div>
    );
}

