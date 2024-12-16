
const TodoNew = (props) => {
    console.log("Check props",props)

    const {addNewTodo} = props;
    // addNewTodo("eric")

    
    return (
        <div className="todo-new">
            <input type="text" placeholder="Add new task" />
            <button>Add</button>
        </div>
    )
}

export default TodoNew;