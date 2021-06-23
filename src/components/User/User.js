import Posts from "../Users/Posts";

export default function User(props) {
    let {item: users} = props
    return (
        <div>
            <h2>{users.id} - {users.name} - {users.username} - {users.email} </h2>

            <Posts postId={users.id}/>
        </div>

    );
}

