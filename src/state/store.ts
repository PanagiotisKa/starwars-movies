import { configureStore } from "@reduxjs/toolkit";
import sortReducer from "./sortSlice";
import searchReducer from './searchSlice'

export const store = configureStore({
 reducer: {
    sort: sortReducer,
    search: searchReducer
 }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch