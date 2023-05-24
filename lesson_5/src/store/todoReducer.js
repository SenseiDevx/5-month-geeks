const ADD_TODO = 'ADD_TODO' 
const REMOVE_TODO = 'REMOVE_TODO' 

const initialState = {
    todos: []
}
export const todosReducer = (state = initialState, action) => {
    if (action.type === ADD_TODO){
        return {
            ...state, 
            todos: [...state.todos, 
                action.payload
            ]}
    }
    return state
} 
// Экшен креэйторы
export const addTodo = payload => ({type: ADD_TODO, payload})
export const removeTodo = payload => ({type: REMOVE_TODO, payload})