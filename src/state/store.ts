import { configureStore } from "@reduxjs/toolkit";
import sortReducer from "./sortSlice";
import searchReducer from './searchSlice'
import episodeListReducer from './episodeListSlice';
import detailsReduser from './detailsSlice'

export const store = configureStore({
 reducer: {
    sort: sortReducer,
    search: searchReducer,
    episodeList: episodeListReducer,
    details: detailsReduser
 }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch