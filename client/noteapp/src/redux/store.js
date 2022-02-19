import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducers'


const rootReducer = combineReducers({ user: userReducer })

const store = configureStore({
    reducer: rootReducer,
})


export default store