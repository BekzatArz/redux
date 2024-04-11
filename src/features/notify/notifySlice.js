import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    notifies: "",
    isVis: false,
}

export const getNotify = createAsyncThunk('notify/getNotify', async (_,  { dispatch }) => {
    dispatch(changeBoolean(false))
    await new Promise(() => setTimeout(() => {
        dispatch(changeBoolean(true))
    }, 2400))
})

export const notifySlice = createSlice({
    name: "notify",
    initialState,
    reducers: {
        changeBoolean: (state, action) => {
            state.isVis = !action.payload
        },
        textNotify: (state, action) => {
            state.notifies = action.payload;
        },
        delNotify:(state) => {
            state.notifies = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getNotify.pending, () => {
                console.log("pending")
            })
            .addCase(getNotify.fulfilled, () => {
                console.log("fulfilled")
            })
            .addCase(getNotify.rejected, () => {
                console.log("rejected")
            })

    }
})

export const { textNotify, delNotify, changeBoolean } = notifySlice.actions
export default notifySlice.reducer