export default function User(props) {
    let {item : user} = props
    return (<div>{user.id} - {user.name}</div>
    );
}

