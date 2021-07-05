export default function Post({item}) {
    return (

        <div>
            {item.userId} -- {item.id} -- {item.title} -- {item.body}
            <button>Coments</button>
        </div>

    );
}

