import {useState} from "react";

export default function App() {
    const [a,setA]=useState([])
    const [b,setB]=useState([])
    return (
        <div>
            <button onClick={()=> {
            setA(++a)}}>inc a - {a}</button>
                <br/>
            <button onClick={()=> {
            setB(++b)}}>inc b - {b}</button>
        </div>

    );
}

