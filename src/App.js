import Users from "./components/charactherComponent";

export default function App() {
    return (
        <div>
        <Users name={`Bohdan`} age={30} color={`black`}/>
            <Users name={`Valentyna`} age={64} color={`black`}/>
            <Users name={`Ann`} age={33} color={`brown`}/>
            <Users name={`Dmytro`} age={15} color={`white`}/>
            <Users name={`Yaroslav`} age={69} color={`black`}/>

        </div>

    );
}


