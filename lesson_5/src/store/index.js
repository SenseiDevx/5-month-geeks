// import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { todosReducer } from './todoReducer'
import thunk from 'redux-thunk'
import { usersReducer } from './usersReducer'


const rootReducer = combineReducers({
  todos: todosReducer,
  users: usersReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))

//middleware это как теория а санки это сама библиотека 