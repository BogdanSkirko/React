// import {useReducer} from "react";
//
// function reducer(state, action) {
//     switch (action.type) {
//         case 'A':
//             return {...state, a: state.a + action.payload}
//
//         case 'B':
//             return {...state,b: state.b + action.payload}
//
//         default:
//             return {...state}
//
//     }
//
//
// }
//         export default function App() {
//         let [state, dispatch] = useReducer(reducer, {a: 0, b: 0})
//         console.log(state)
//         let {a, b} = state
//         return (
//
//             <div>
//                 <button onClick={() => {dispatch({type: 'A', payload: 1});}}>inc a -{a}</button>
//                 <br/>
//                 <button onClick={() => {dispatch({type: 'B', payload: 2});}}>inc b -{b}</button>
//
//             </div>
//
//
//         );
//     }
//


import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

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

