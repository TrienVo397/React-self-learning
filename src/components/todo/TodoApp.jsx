import "./todo.css"
import TodoData from "./TodoData"
import TodoNew from "./TodoNew"
import reactLogo from "../../assets/react.svg"
import { useState } from "react"

const TodoApp = () => {
    const [todoList, setTodoList] = useState([
        // { id: 1, name: "Learning React" }, { id: 2, name: "Watching Youtube" }
    ])
    const hoidanit = "Eric MU"
    const age = 22;
    const data = {
        address: "Hanoi",
        country: "Vietnam"
    }

    const addNewTodo = (name) => {
        const newTodo = {
            id: randomIntFromInterval(1, 1000000),
            name: name,
        }
        setTodoList([...todoList, newTodo])
    }

    const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const deleteTodo = (id) => {
        const tempData = todoList.filter(item => item.id !== id) // filter out tasks with different ids
        console.log("newTodo ", tempData)
        setTodoList(tempData);
    }
    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <TodoNew addNewTodo={addNewTodo}
            />
            {todoList.length > 0 ?
                <TodoData
                    todoList={todoList}
                    deleteTodo={deleteTodo}
                />
                :
                <div className="todo-image">
                    <img className="logo" src={reactLogo} alt="" />
                </div>
            }
        </div>
    )
}
export default TodoApp