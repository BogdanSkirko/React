import {useDispatch, useSelector} from "react-redux";


const NestedChild = () => {
    const counter = useSelector(({counter: {value}}) => value)
    const dispatch = useDispatch()
    let input = []
    // const inputInfo = []
    // dispatch({
    //     type: 'INC_CUSTOM'
    // })
 return (
    <header className="App-header">
      <h1>{counter}</h1>
        <button onClick={() => {
        dispatch({type: 'INC'})}
        }>inc</button>

        <button onClick={() => {
        dispatch({type: 'DEC'})}
        }>DEC</button>

        <button onClick={() => {
        dispatch({type: 'RESET'})}
        }>RESET</button>

        <input/>

         <button onClick={() => {
        dispatch({type: 'INC_CUSTOM'})}
        }>INC_CUSTOM</button>

    </header>
  )
}



function App() {

    return (
        <div>
            <NestedChild/>
        </div>

    );
}
export default App
