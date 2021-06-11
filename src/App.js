import User from "./components/Users/User";
import {useState} from "react";

let users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
]
export default function App() {

    let [count,setCounter] = useState(0)
    let [userInfo, setUsers] = useState(users)
    let [dec,setDec] = useState(0)
    const increment = () => setCounter(++count)
    const decrement = () => setDec(--dec)
    const deleteUsers = () => {
        users.pop()
        setUsers([...userInfo])


    };

    return (
        <div>
            <div>
                count is {count}
                <button onClick={increment}>increment</button>
                   dec is {dec}
                <button onClick={decrement}>decrement</button>
            </div>
            <div>
                {
                    users.map((value, index) =>
                        <User key={index}
                              {...value}
                        />
                    )
                }

                <button onClick={deleteUsers}>delete user</button>
            </div>
        </div>
    );
}