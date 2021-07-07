import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

export default function Users() {

    const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    console.log(json)
}
    useEffect(() => {
        fetchUsers()
    },[])
    return (
        <div>
            {}
        </div>

    );
}

