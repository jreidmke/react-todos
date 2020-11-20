import React, {useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

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
            <TodoForm createTodo={addTodo}/>
            {makeTodos}
        </div>
    )
}

export default TodoList;