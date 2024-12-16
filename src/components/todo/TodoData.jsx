
const TodoData = (props) => {

    const { todoList } = props;

    console.log('>>> check props: ', props);
    //props is an object that contains all the properties that are passed to the component
    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                console.log(">>> Check log ", item, index)
                return (
                    <div className={`todo-item ${index}`} key={index}>
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>)
            })}
            {/* <div>Learning React</div>
            <div>Watching Youtube</div> */}
        </div>);
}
export default TodoData;
