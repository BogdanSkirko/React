import Users from "./components/Users";


export default function App() {
    return (
        <div>
          <Users name={`Ann`} age={30} color={`green`}/>
          <Users name={`Dima`} age={33} color={`blonde`}/>
          <Users name={`Bohdan`} age={24} color={`black`}/>
</div>
)
}