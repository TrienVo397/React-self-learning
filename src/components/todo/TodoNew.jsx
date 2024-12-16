
const TodoNew = (props) => {
    console.log("Check props", props)

    const { addNewTodo } = props;
    // addNewTodo("eric")
    const handleClick = () => {
        alert("You have clicked me")
    }

    const handleOnChange = (name) => {
        console.log("Value: ", name)
    }


    return (
        <div className="todo-new">
            <input type="text" placeholder="Add new task"
                onChange={(event) => handleOnChange(event.target.value)

                } />
            <button style={{ cursor: 'pointer' }} onClick={handleClick}>Add</button>
        </div>
    )
}

export default TodoNew;