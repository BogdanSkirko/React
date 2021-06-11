export default function Users(props) {
    let {name, age, color} = -props;


    return (

        <div>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{color}</p>
        </div>
    )


}