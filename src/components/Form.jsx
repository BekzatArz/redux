import React, { useState } from 'react'
import Todos from './Todos'
import { useDispatch, useSelector } from 'react-redux'
import { v4 } from 'uuid'
import { addTodo } from '../features/todos/todosSlice'
import { getNotify, textNotify } from '../features/notify/notifySlice'

const Form = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos.todos)

    const [todoValue, setTodoValue] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const addTodoHandler = () => {
        if (todoValue.trim() !== '') {
            const todo = {
                id: v4(),
                text: todoValue,
                isCompleted: false,
            }
            dispatch(addTodo(todo))
            dispatch(getNotify())
            dispatch(textNotify('Добавлено!'))
            setTodoValue('')
            setErrorMessage('')
        }else{
            setErrorMessage('Введите значение!')
            setTodoValue('')
        }
    }
    const enterDownHandler = (e) => {
        if (e.key === "Enter"){
            addTodoHandler()
        }
    }
  return (
    <div className='relative'>
        {errorMessage && <p className='absolute top-0 text-yellow-300'>{errorMessage}</p>}
        <div className="flex gap-4 pt-6">
            <input type="text" 
            value={todoValue}
            className='bg-slate-600 outline-none rounded-md'
            onChange={(e) => setTodoValue(e.target.value)}
            onKeyDown={enterDownHandler}
            />

            <button className='border-cyan-700 border-2 rounded-md p-1 hover:bg-teal-600'
            onClick={() => addTodoHandler()}>
                Add
            </button>
        </div>
        <div className="overflow-hidden">
            <ul>
                {todos?.map((todo) => <Todos key={todo.id} todo={todo}/>)}
            </ul>
        </div>
    </div>
  )
}

export default Form