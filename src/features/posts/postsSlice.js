import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    posts: [],
    loading: false
}
export const getPosts = createAsyncThunk('posts/getPosts', async (_, { rejectWithValue, getState, dispatch}) => {
    try{
        const state = getState()
        let count = state.posts.posts.length
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/?_limit=10&_start=${count}`, )
        count += 10
        dispatch(setPosts(res.data))
    } catch (error){
        console.log(rejectWithValue, error)
    }
},)

export const deletePostById = createAsyncThunk('deletePost/deletePostById', async (id, {dispatch}) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    dispatch(deletePost(id))
})

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {state.posts.push(...action.payload)},
        deletePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload)
        }
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                console.log('pending')
                state.loading = true

            })
            .addCase(getPosts.fulfilled, (state) => {
                console.log('fulfilled')
                state.loading = false
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