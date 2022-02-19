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
        }
    }
})
export const { loginStart, loginSuccess, loginFailure, logout } = userReducer.actions
export default userReducer.reducer