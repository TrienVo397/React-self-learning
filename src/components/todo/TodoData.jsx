
const TodoData = (props) => {

    const {name,age, data} = props;

    console.log('>>> check props: ', props);
    //props is an object that contains all the properties that are passed to the component
    return (
        <div className="todo-data">
            <div>My name is {props.name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
            <div>{JSON.stringify(props.todoList)}</div>
        </div>);
}
export default TodoData;