import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({createTodo}) => {

    const INITIAL_STATE = {
        task: ""
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name}
    }
}