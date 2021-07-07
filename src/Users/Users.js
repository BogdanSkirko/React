import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

export default function Users() {
    const dispatch = useDispatch()
    const fetchUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch({
                type: 'USERS',
                payload: json
            }))
    }



    return (
        <div>

        </div>

    );
}

