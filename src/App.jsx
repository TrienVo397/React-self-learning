import "./components/todo/todo.css"
import TodoData from "./components/todo/TodoData"
import TodoNew from "./components/todo/TodoNew"
import reactLogo from "./assets/react.svg"


function App() {

  const hoidanit = "Eric MU"
  const age = 22;
  const data = {
    address: "Hanoi",
    country: "Vietnam"
  }
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew />
        <TodoData
        name = {hoidanit}
        ageofme ={age}
        data={data}/>

        <div className="todo-image">
          <img className="logo" src={reactLogo} alt="" />
        </div>

      </div>
    </>
  )
}

export default App
