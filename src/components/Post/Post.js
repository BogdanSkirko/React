import {getComments} from "../../services/API";
import {useState} from "react";

export default function Post({items:{id,title}}) {
    const [giveComments,setGiveComments]=useState([])
    return (
        <div>
            {id}   {title}
            <button onClick={()=> {
                getComments(id).then(value => setGiveComments(value.data))}
            }>Comments</button>

            {giveComments.map(value => <h2>{value.id} {value.email}</h2>)}
        </div>

    );
}

