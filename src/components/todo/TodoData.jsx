
const TodoData = (props) => {

    const { todoList, deleteTodo } = props;
    const handleClick = (id) =>{
        // alert(`Alert me ${id}`)
        deleteTodo(id)
    }


    console.log('>>> check props: ', props);
    //props is an object that contains all the properties that are passed to the component
    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                console.log(">>> Check log ", item, index)
                return (
                    <div className={`todo-item ${index}`} key={item.id}> 
                    {/* use id from backend */}
                        <div>{item.name}</div>
                        <button style={{cursor: "pointer"}} onClick={() => handleClick(item.id)}>Delete</button>
                    </div>) 
            })}
            {/* <div>Learning React</div>
            <div>Watching Youtube</div> */}
        </div>);
}
export default TodoData;
