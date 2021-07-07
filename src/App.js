// import {useDispatch, useSelector} from "react-redux";
//
//
// const NestedChild = () => {
//     const counter = useSelector(({counter: {value}}) => value)
//     const dispatch = useDispatch()
//     let input = []
//     // const inputInfo = []
//     // dispatch({
//     //     type: 'INC_CUSTOM'
//     // })
//  return (
//     <header className="App-header">
//       <h1>{counter}</h1>
//         <button onClick={() => {
//         dispatch({type: 'INC'})}
//         }>inc</button>
//
//         <button onClick={() => {
//         dispatch({type: 'DEC'})}
//         }>DEC</button>
//
//         <button onClick={() => {
//         dispatch({type: 'RESET'})}
//         }>RESET</button>
//
//         <input/>
//
//          <button onClick={() => {
//         dispatch({type: 'INC_CUSTOM'})}
//         }>INC_CUSTOM</button>
//
//     </header>
//   )
// }
//
//
//
// function App() {
//
//     return (
//         <div>
//             <NestedChild/>
//         </div>
//
//     );
// }
// export default App

import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Users from "./Users/Users";
import Posts from "./Posts/Posts";
import Comments from "./Comments/Comments";
import React, {useEffect} from "react";



export default function App() {

    return (

        <div>
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
        </div>

    );
}

