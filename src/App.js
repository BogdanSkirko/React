import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addTodos, pushNewTodo, setLoadingFalse, setLoadingTrue} from "./redux/actionCreators";

const CreateTodoForm = ({onSubmit}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const handleSumbmit = async (e) => {
        e.preventDefault();
        if (!title || !description || loading) return;
        try {
            setLoading(true)
            await onSubmit(title, description)
            setTitle('')
            setDescription('')
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }

    }
    return (
        <div>
            <form onSubmit={handleSumbmit}>
                <input
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={({target: {value}}) => setTitle(value)}/>
                <br/>
                <br/>
                <input
                    type="text"
                    placeholder="description"
                    value={description}
                    onChange={({target: {value}}) => setDescription(value)}/>
                <br/>
                <br/>
                <button type="submit" disabled={!title || !description || loading}>create todo</button>
            </form>
        </div>
    )
}
const TodosList = ({todos, isLoading}) => {
    if (isLoading) return <h1>LOADING....</h1>
    return (
        <div>
            {todos.map(todo => (
                <div>
                    <h4>
                        {todo.title}
                    </h4>
                    <p>
                        {todo.description}
                    </p>
                    <p>
                        Is Completed: {todo.completed.toString()}
                    </p>
                    <span>Created at:{new Date(todo.createdAt).toLocaleString()}</span>
                     <button>Delete User</button>
                    <hr/>

                </div>
            ))}
        </div>
    )
}


function App() {
    const {todos, isLoading} = useSelector(({todosReducer}) => todosReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchTodos()
    }, []);
    const fetchTodos = async () => {
        try {
            dispatch(setLoadingTrue())
            const response = await fetch('http://localhost:8888/get-todos');
            const data = await response.json();
            dispatch(addTodos(data))
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(setLoadingFalse())

        }
    }
    const onTodoCreate = async (title, description) => {
        if (!title || !description) return;


        const response = await fetch('http://localhost:8888/create-todo', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        dispatch(pushNewTodo(data))
        console.log(data)
    }
    return (
        <div>
            <CreateTodoForm onSubmit={onTodoCreate}/>
            <TodosList todos={todos} isLoading={isLoading}/>
        </div>

    );
}

export default App
