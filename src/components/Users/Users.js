// import User from "../User/User";
//
// export default function Users({items,userFunction,userFunctionPosts}) {
//     return (
//         <div>
//             {
//                 items.map((value)=> <User key={value.id} item={value} userDril={userFunction} postsDril={userFunctionPosts}/>)
//             }
//         </div>
//
//     );
// }
//

// ================================
// import User from "../User/User";
//
// export default function Users({items,fcFromAppToUsers}) {
//     return (
//         <div>
//             {
//                 items.map((value) => <User item={value} fcFromUsersToUser={fcFromAppToUsers} />)
//             }
//         </div>
//
//     );
// }
// =====================================================================

import User from "../User/User";

export default function Users({items,getId}) {
    return (
        <div>
            {
                items.map((value) => <User key={value.id} item={value} getsId={getId}/>)
            }
        </div>

    );
}

