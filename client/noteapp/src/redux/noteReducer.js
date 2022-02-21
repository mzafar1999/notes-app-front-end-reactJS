import { createSlice } from "@reduxjs/toolkit"

const noteReducer = createSlice({
    name: 'note',
    initialState: {
        note: [],
        isCreating: false,
        error: false
    },
    reducers: {
        noteCreatingStart: (state) => {
            state.isCreating = true
        },
        noteCreatingSuccess: (state, action) => {
            state.isCreating = false;
            state.note = action.payload
        },
        noteCreatingFailure: (state) => {
            state.isFetching = false;
            state.isError = true
        },

    }
})
export const { noteCreatingStart, noteCreatingSuccess, noteCreatingFailure } = noteReducer.actions
export default noteReducer.reducer