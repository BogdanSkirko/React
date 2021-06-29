import Post from "../Post/Post";

export default function Posts({posts,funcPosts}) {

    return (
        <div>
            {
                posts.map((value) => <Post key={value.id} items={value} fnPosts={funcPosts}/>)
            }
        </div>

    );
}

