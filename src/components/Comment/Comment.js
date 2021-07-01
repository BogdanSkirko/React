export default function Comment({itemCom}) {
    return (
        <div>
            {itemCom.id} --{itemCom.name}-- {itemCom.email}
        </div>

    );
}

