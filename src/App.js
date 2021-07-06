// створити посилання /users, /posts, /comments.
// При переході на посилання відображати інформацію з jsonplaceholder про users/posts/comments відповідно до посилання за логікою.
// Для всього використовувати окремий компонент (Users->User, Posts->Post).
// В компоненті user та post зробити кнопки. При натисканні на які відображаються пости юзера (а в постах коментарі поста. Але не в постах юзера, а за урлою /posts)
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
import {getPosts} from "./services/API";
import {useState} from "react";
import {findByAltText} from "@testing-library/react";


export default function App() {

    return (
        <Router>
            <div>
                <Link to={'/users'}>users page</Link>
                <br/>
                <Link to={'/posts'}>posts page</Link>
                <br/>
                <Link to={'/comments'}>comments page</Link>
                <br/>

                <Route path={'/users'} render={() => <Users/>}/>
                <Route path={'/posts'} render={() => <Posts/>}/>
                <Route path={'/comments'} render={() => <Comments/>}/>
                <Route/>

            </div>
        </Router>
    );
}
