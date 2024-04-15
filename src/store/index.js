import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistStore,
     persistReducer,
     FLUSH,
     REGISTER,
     PAUSE,
     PERSIST,
     PURGE,
     REHYDRATE
    
    } from 'redux-persist'
import userSlice from '../features/user/userSlice'
import todosSlice from '../features/todos/todosSlice'
import postsSlice from '../features/posts/postsSlice'
import notifySlice from '../features/notify/notifySlice'

const rootReducer = combineReducers({
        user: userSlice,
        todos: todosSlice,
        posts: postsSlice,
        notify: notifySlice
})

const persistConfig = {
    key: 'root',
    storage: storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH,REGISTER,PAUSE,PERSIST,PURGE,REHYDRATE],
        },
    }) 
})


export const persistor = persistStore(store); 
export default store;
