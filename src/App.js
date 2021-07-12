import {useSelector} from "react-redux";
import {useState} from "react";
const CreateTodoForm = ({ onSubmit }) =>{
    const [title,setTitle] =useState('')
    const [description,setDescription] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description) return;
        onSubmit(title,description)
}
return (

    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="title"
            value={title}
            onChange={({target:{value}}) => setTitle(value)}/>
        <input
            type="text"
            placeholder= "descreption"
            value={description}
            onChange={({target:{value}}) => setDescription(value)}/>
        <br/>
        <button type={"submit"} disabled={!title || !description}>create todo</button>

    </form>
)                                            


}
export default function App() {
    const store = useSelector(state => state)
    const onTodoCreate = async (title,description) => {
        if (!title || ~description) return;

        const response = fetch('https://localhost:8888/create-todo',{
            method: 'POST',
            body: JSON.stringify({title,description}),
            headers: {
                'Content-type':'application/json'
            }
        })
        const data = (await response).json();
        console.log(data)
    }
    return (
        <div>
                <CreateTodoForm onSubmit={onTodoCreate}/>
        </div>

    );
}

