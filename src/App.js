import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";


const NestedChild = () => {
    const counter = useSelector(({counter: {value}}) => value)
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('');
    // const inputInfo = []
    // dispatch({
    //     type: 'INC_CUSTOM'
    // })

    const onChangeIUnput = ({target : {value}}) => setInputValue(value)

    const inputAdd = () => {
        dispatch({type: 'INPUT', payload: +inputValue})
        setInputValue('')
    }

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

        <input type={'number'} value={inputValue} onChange={onChangeIUnput} name={'numbers'}/>

         <button onClick={inputAdd}>INC_CUSTOM</button>

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
