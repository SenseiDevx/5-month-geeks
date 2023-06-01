import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, fetchTodos } from "../redux/todoReducer/todoReducer";

const Todo = () => {
    const [newTodo, setNewTodo] = useState('')
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    const inputTodo = (e) => {
        setNewTodo(e.target.value)
    }

    const sendForm = () => {
        if (newTodo.trim() !== '') {
            const todo = {
                title: newTodo,
                completed: false
            };
            dispatch(addTodo(todo))
            setNewTodo('')
        }
    }

    const clickDeleteTodo = (todo) => {
        dispatch(deleteTodo(todo.id))
    }

    return (
        <div>
            <h2>TodoList</h2>
            <input type="text" onChange={inputTodo} value={newTodo} placeholder={'Add new Todo...'} />
            <button className={'btn'} onClick={sendForm}>Добавить</button>

            <div>
                {todos && (
                    <ul>
                        {todos.map(t =>
                            <li key={t.id}>
                                {t.title}
                                <button onClick={() => clickDeleteTodo(t)}>Удалить</button>
                            </li>
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Todo;
