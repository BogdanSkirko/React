export default function Post({item, funClick}) {
    return (
        <div>
            {item.id}  <hr/> <button
            onClick={
                () => funClick ( item.id)
            }
        >click me</button>
        </div>

    );
}

