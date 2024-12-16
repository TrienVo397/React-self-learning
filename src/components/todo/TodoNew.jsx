import { useState } from 'react'

const TodoNew = (props) => {


    const [valueInput, setValueInput] = useState("Trien")
    const { addNewTodo } = props;
    // addNewTodo("eric")
    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput("")
    }

    const handleOnChange = (name) => {
        setValueInput(name)
    }


    return (
        <div className="todo-new">
            <input type="text" placeholder="Add new task"
                onChange={(event) => handleOnChange(event.target.value)
                }
                value={valueInput} />
            <button style={{ cursor: 'pointer' }}
                onClick={handleClick}
            >Add</button>
            My text input is {valueInput}
        </div>
    )
}

export default TodoNew;