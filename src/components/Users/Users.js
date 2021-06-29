import User from "../User/User";

export default function Users({items,funcUsers}) {

    return (
        <div>
            {
                items.map((value) => <User key={value.id} item={value} fnUser={funcUsers}/>)
            }
        </div>

    );
}

