import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: []
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {state.todos.push(action.payload)},
        toggleCompleted: (state, action) => {
            const toggleTodo = state.todos.find((todo) => todo.id === action.payload)
            toggleTodo.isCompleted = !toggleTodo.isCompleted 
        },
        removeTodo: (state, action) => {state.todos = state.todos.filter((todo) => todo.id !== action.payload)},
        changeText: (state, action) => {
            const changeTodo = state.todos.find((todo) => todo.id === action.payload.id);
            changeTodo.text = action.payload.text
    },  
    }
})
export const { addTodo, toggleCompleted, removeTodo, changeText } = todosSlice.actions
export default todosSlice.reducer