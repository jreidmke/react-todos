import React, {useState} from 'react';
import Todo from './Todo';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    }

    const removeTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    const makeTodos = todos.map(todo =>
        <Todo task='Make pizza'/>
    )
    
    return(
        <div>
            <button onClick={addTodo}>Remind yourself to make pizza</button>
            {makeTodos}
        </div>
    )
}

export default TodoList;