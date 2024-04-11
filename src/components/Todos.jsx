import React, { useRef, useState } from 'react'
import { useDispatch } from "react-redux"
import { toggleCompleted, removeTodo, changeText } from '../features/todos/todosSlice'
import { getNotify, textNotify } from '../features/notify/notifySlice'

const Todos = ({ todo }) => {
    const  [todoValue, setTodoValue] = useState(todo.text)
    const [readOnly, setReadOnly] = useState(true);
    const inputRef = useRef(null)
    const dispatch = useDispatch()

    const readOnlyHandler = (id) => {
        if (!readOnly && (todo.text !== todoValue) ){ // Запускает функцию только тогда когда текст был изменён и когда блокается
            dispatch(changeText({
                id: id,
                text: todoValue
            }))
            dispatch(getNotify())
            dispatch(textNotify('Сохранено!'))
        } else {
            inputRef.current.focus();
            const inputValue = inputRef.current.value;
            inputRef.current.setSelectionRange(inputValue.length, inputValue.length);
        }
        setReadOnly(!readOnly)
        // console.log(todoState)
    }

    const toggleCompletedHandler = (id) => {
        dispatch(toggleCompleted(id))
        dispatch(getNotify())
        if(todo.isCompleted === false){
            dispatch(textNotify('Молодец хорошо постарался!'))
        }else{
            dispatch(textNotify('Упс доделай кое что до конца...'))
        }
    }
    const removeTodoHandler = (id) => {
        dispatch(removeTodo(id))
        dispatch(getNotify())
        dispatch(textNotify('Удалено!'))
    }

  return <li className='bg-orange-400 mt-3 rounded-xl flex flex-col items-center'>
    <div className=' w-full flex justify-center gap-4'>
        <svg onClick={() => removeTodoHandler(todo.id)} fill="#000000" className='max-w-6 min-w-6 cursor-pointer hover:fill-lime-900' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 439.039 439.039" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M369.514,49.094H69.525c-6.903,0-12.5,5.597-12.5,12.5v50.561c0,6.904,5.597,12.5,12.5,12.5h8.529l34.731,303.308 c0.723,6.312,6.065,11.076,12.419,11.076h188.627c6.354,0,11.695-4.766,12.418-11.076l34.733-303.309h8.529 c6.903,0,12.5-5.596,12.5-12.5v-50.56C382.014,54.691,376.417,49.094,369.514,49.094z M82.025,74.094h274.988v25.561h-7.18H89.206 h-7.18V74.094z M302.682,414.041H136.355l-33.137-289.385H335.82L302.682,414.041z M382.014,27.625c0,6.903-5.598,12.5-12.5,12.5 c-4.172,0-7.867-2.044-10.138-5.186h-0.819h-5.828h-54.453h-4.568H79.664c-2.271,3.142-5.966,5.186-10.138,5.186 c-6.903,0-12.5-5.597-12.5-12.5v-5.186c0-6.903,5.597-12.5,12.5-12.5h216.512C287.22,4.264,292.251,0,298.275,0h54.453 c6.025,0,11.056,4.264,12.237,9.939h4.548c6.903,0,12.5,5.597,12.5,12.5V27.625L382.014,27.625z"></path> </g> </g></svg>
        {!readOnly ? <svg onClick={() => readOnlyHandler(todo.id)} className='hover:fill-slate-600 cursor-pointer flex-shrink-0' viewBox="0 0 24 24" fill="none" width={23} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M18.1716 1C18.702 1 19.2107 1.21071 19.5858 1.58579L22.4142 4.41421C22.7893 4.78929 23 5.29799 23 5.82843V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H18.1716ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21L5 21L5 15C5 13.3431 6.34315 12 8 12L16 12C17.6569 12 19 13.3431 19 15V21H20C20.5523 21 21 20.5523 21 20V6.82843C21 6.29799 20.7893 5.78929 20.4142 5.41421L18.5858 3.58579C18.2107 3.21071 17.702 3 17.1716 3H17V5C17 6.65685 15.6569 8 14 8H10C8.34315 8 7 6.65685 7 5V3H4ZM17 21V15C17 14.4477 16.5523 14 16 14L8 14C7.44772 14 7 14.4477 7 15L7 21L17 21ZM9 3H15V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5V3Z" fill="#0F0F0F"></path> </g></svg>:
        <svg onClick={() => readOnlyHandler(todo.id)} viewBox="0 0 24 24" className='hover:fill-slate-600 cursor-pointer flex-shrink-0' width={30} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.4998 5.50067L18.3282 8.3291M13 21H21M3 21.0004L3.04745 20.6683C3.21536 19.4929 3.29932 18.9052 3.49029 18.3565C3.65975 17.8697 3.89124 17.4067 4.17906 16.979C4.50341 16.497 4.92319 16.0772 5.76274 15.2377L17.4107 3.58969C18.1918 2.80865 19.4581 2.80864 20.2392 3.58969C21.0202 4.37074 21.0202 5.63707 20.2392 6.41812L8.37744 18.2798C7.61579 19.0415 7.23497 19.4223 6.8012 19.7252C6.41618 19.994 6.00093 20.2167 5.56398 20.3887C5.07171 20.5824 4.54375 20.6889 3.48793 20.902L3 21.0004Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>}
        <svg onClick={() => toggleCompletedHandler(todo.id)}className='cursor-pointer hover:fill-orange-700' version="1.1" width={25} id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 495.426 495.426" style={{ enableBackground: 'new 0 0 495.426 495.426' }} xmlSpace="preserve"><g><g><polygon points="405.584,43.295 176.428,272.452 89.84,185.865 0,275.706 86.588,362.293 176.428,452.131 266.266,362.293 495.426,133.133 "/></g></g></svg>
    </div>
    <textarea ref={inputRef} defaultValue={todo.text} onChange={(e) => setTodoValue(e.target.value)} className={`resize-none relative border border-gray-300 rounded-md p-4 scrollbar overflow-y-auto outline-none text-2xl text-black flex-grow overflow-hidden break-words ${todo.isCompleted ? ' line-through decoration-black': ''} placeholder:text-black hover:cursor-default min-h-14 p-5`} 
        readOnly={readOnly}></textarea>
  </li>
}

export default Todos