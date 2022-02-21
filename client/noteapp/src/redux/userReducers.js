import { createSlice } from "@reduxjs/toolkit"

const userReducer = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.isError = true
        },
        logout: (state) => {
            state.currentUser = null
        },
        noteCreate: (state) => {
            state.isFetching = true
        },
        addNote: (state, action) => {
            state.currentUser.notes.push(action.payload)
            state.isFetching = false
        },
        noteError: (state) => {
            state.isError = true
            state.isFetching = false
        }
    }
})
export const { loginStart, loginSuccess, loginFailure, logout, addNote, noteCreate, noteError } = userReducer.actions
export default userReducer.reducer