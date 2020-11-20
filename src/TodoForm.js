import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({createTodo}) => {

    const INITIAL_STATE = {
        task: ""
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const input = (e) => {
        e.preventDefault();
        createTodo({...formData, id: uuidv4()});
        setFormData(INITIAL_STATE);
    }

    return(
        <div>
            <form onSubmit={input}>
                <label htmlFor='task'>Task</label>
                <input
                onChange={handleChange}
                type='text'
                name='task'
                value={formData.task}
                id='task'/>
                <button id='newTodoBtn'>Add Todo</button>
            </form>
        </div>
    )
}