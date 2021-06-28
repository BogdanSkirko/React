export default function User({item, userDril, postsDril}) {
    return (
        <div>

            {item.name} - {item.id} -
            <button onClick={() => userDril(item.id)}>Інформація про юзера</button>
            <button onClick={() => postsDril(item.id)}>Інформація про пости</button>
        </div>

    );
}

