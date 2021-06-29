export default function User({item,fnUser}) {
    return (
        <div>
            {item.name} - {item.id}
            <button onClick={() => {return fnUser(item.id)}}>Інформація про юзера</button>

            <hr/>
            {

            }
            <hr/>
        </div>

    );
}


