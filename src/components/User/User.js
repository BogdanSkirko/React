import {getPosts} from "../../services/API";
import {useState} from "react";
import Post from "../Post/Post";

export default function User({item, userDril, postsDril}) {
    const [userPosts, setUserPosts] = useState([]);
    const [toggle, setToggle] = useState(false);

    return (
        <div>

            <h2> {item.name} - {item.id} -

                {/*<button onClick={() => userDril(item.id)}>Інформація про юзера</button>*/}
                <button onClick={() => {
                    setToggle(!toggle);
                    postsDril(item.id);
                    getPosts(item.id).then(value => setUserPosts(value.data))

                }

                }>Інформація про пости
                </button>
            </h2>

            {toggle && userPosts && userPosts.map(value => <Post item={value}/>)}


        </div>

    );
}

