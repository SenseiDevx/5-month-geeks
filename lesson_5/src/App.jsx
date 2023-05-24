import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from './store/todoReducer'
import './App.css'
import { fetchUsers } from './store/usersReducer'

function App() {
  const [newTodo, setNewTodo] = useState('')
  const todos = useSelector(state => state.todos.todos)

  const dispatch = useDispatch()
    // dispatch(addTodo(newTodo))
    // setNewTodo('')


  const onSubmit = () => {
    dispatch(fetchUsers())
  }

   const users = useSelector(state => state.users.users)

  return (
    <>
    <button onClick={onSubmit}>Показать пользователей</button>
    {
      users &&
      <>
      <h5>Users</h5>
      <ul> {
      users.map(item => <li> {item.name} </li>)
      }</ul>
      </>
    }

    </>
  )
}

export default App