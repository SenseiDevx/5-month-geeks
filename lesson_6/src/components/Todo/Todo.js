import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, deleteTodo, toggleTodo, todoSelect} from '../../store/todoReducer/todoReducer';
import {Button, Checkbox, TextField} from '@mui/material';
import styles from './todo.module.css';

const Todo = () => {
    const [todo, setTodo] = useState('');

    const dispatch = useDispatch();

    const {items} = useSelector(todoSelect);

    const onAdd = () => {
        if (todo.trim() !== '') {
            dispatch(addTodo(todo));
            setTodo('');
        }
    };

    const deleted = (id) => {
        dispatch(deleteTodo(items.filter((i) => i.id !== id)));
    };

    const handleToggle = (id) => {
        dispatch(toggleTodo(id));
    };

    const onKey = (e) => {
        if (e.key === 'Enter' && todo.trim() !== '') {
            dispatch(addTodo(todo));
            setTodo('');
        }
    };

    return (
        <div>
            <div>
                <h1 style={{margin: '30px', color: 'white'}}>TodoList</h1>
                <div>
                    <TextField
                        sx={{color: 'white'}}
                        label="addTodo"
                        onKeyPress={onKey}
                        type="text"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <Button variant="contained" onClick={onAdd}>
                        Add
                    </Button>
                </div>
                <ul style={{listStyle: 'none'}}>
                    {items.map((i, index) => (
                        <li key={i.id}>
                            <div className={styles.list}>
                                <h3>{index + 1}: </h3>
                                <h2 style={i.completed ? {textDecoration: 'line-through'} : {}}>
                                    {i.text}
                                </h2>
                                <div className={styles.checkBut}>
                                    <Checkbox
                                        checked={i.completed}
                                        onChange={() => handleToggle(i.id)}
                                        color="primary"
                                    />
                                    <Button variant="outlined" onClick={() => deleted(i.id)}>
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Todo;
