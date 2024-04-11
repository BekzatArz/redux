import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/user/userSlice'
import todosSlice from '../features/todos/todosSlice'
import postsSlice from '../features/posts/postsSlice'
import notifySlice from '../features/notify/notifySlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        todos: todosSlice,
        posts: postsSlice,
        notify: notifySlice
    },
})