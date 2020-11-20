const Todo = ({task, handleRemove, id}) => {
    const remove = () => handleRemove(id);

    return(
    <li>{task}<button onClick={remove}>x</button></li>
    )
}

export default Todo;