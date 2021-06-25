import Post from "../Post/Post";

export default function Posts({items,funClick}) {

    return (
        <div>
            {
                items.map((value) => <Post key={value.id} item={value} funClick={funClick}/>)
            }
        </div>

    );
}

