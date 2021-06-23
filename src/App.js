import Users from "./components/Users";
import Menu from "./components/Menu";


export default function App() {
    return (
        <div>

            <Menu pages={[`users page`, `comments page`, `posts page`]}
                  classes={[`target`, `point`]}/>
            <Users/>
            <Menu pages={[`about`, `team`]}
                  classes={[`firstClass`, `secondClass`].join(` `)}/>
        </div>

    );
}


