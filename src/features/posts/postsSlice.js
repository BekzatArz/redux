import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    posts: []
}
let a = 0
export const getPosts = createAsyncThunk('posts/getPosts', async (_, {rejectWithValue, dispatch}) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_start=${a}`, )
    dispatch(setPosts(res.data))
    console.log(res.data)
    a += 10
},)

export const deletePostById = createAsyncThunk('deletePost/deletePostById', async (id, {rejectWithValue, dispatch}) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    dispatch(deletePost(id))
})

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {state.posts.push(...action.payload)},
        deletePost: (state, action) => {state.posts = state.posts.filter((post) => post.id !== action.payload)}
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, () => {
                console.log('pending')
            })
            .addCase(getPosts.fulfilled, () => {
                console.log('fulfilled')
            })
            .addCase(getPosts.rejected, () => {
                console.log('rejected')
            })
            .addCase(deletePostById.pending, () => {
                console.log('pending')
            })
            .addCase(deletePostById.fulfilled, () => {
                console.log('fulfilled')
            })
            .addCase(deletePostById.rejected, () => {
                console.log('rejected')
            })
    }
})

export const { setPosts, deletePost } = postsSlice.actions
export default postsSlice.reducer