import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../redux/todoReducer/todoReducer";

const Todo = () => {
    const [newTodo, setNewTodo] = useState('');
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    }

    const handleFormSubmit = () => {
        if (newTodo.trim() !== '') {
            const todo = {
                title: newTodo,
                completed: false
            };
            dispatch(addTodo(todo));
            setNewTodo('');
        }
    }

    const handleDeleteClick = (todo) => {
        dispatch(deleteTodo(todo.id));
    }

    return (
        <div>
            <h2>TodoList</h2>
            <input type="text" onChange={handleInputChange} value={newTodo} placeholder="Add new Todo..." />
            <button className="btn" onClick={handleFormSubmit}>Добавить</button>

            <div>
                {todos && (
                    <ul>
                        {todos.map(t =>
                            <li key={t.id}>
                                {t.title}
                                <button onClick={() => handleDeleteClick(t)}>Удалить</button>
                            </li>
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Todo;
