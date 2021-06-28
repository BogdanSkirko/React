import User from "../User/User";

export default function Users({items,userFunction,userFunctionPosts}) {
    return (
        <div>
            {
                items.map((value)=> <User key={value.id} item={value} userDril={userFunction} postsDril={userFunctionPosts}/>)
            }
        </div>

    );
}


