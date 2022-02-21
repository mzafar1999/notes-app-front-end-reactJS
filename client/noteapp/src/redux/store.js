import { combineReducers, configureStore } from '@reduxjs/toolkit'
import noteReducer from './noteReducer'
import userReducer from './userReducers'


const rootReducer = combineReducers({ user: userReducer, note: noteReducer })

const store = configureStore({
    reducer: rootReducer,
})


export default store