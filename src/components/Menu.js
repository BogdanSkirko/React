import './Style.css'
export default function Menu(props) {

    let {classes,pages} = props
    return (
        <ul>
            {pages.map(page => <li className={classes}>{page}</li>)}
        </ul>

    );
}

