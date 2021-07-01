import {useEffect, useState} from "react";
import {getComments} from "../../services/API";
import Comment from "../Comment/Comment";

export default function Comments() {
    const [comments, setComments] = useState([])
    useEffect(()=> {
        getComments().then(value => setComments(value.data))
    },[])
    return (
        <div>
            {
                comments.map((value => <Comment key={value.id} itemCom={value}/>))
            }
        </div>

    );
}

