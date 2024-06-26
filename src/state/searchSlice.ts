import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SearchState {
    value: string
}

const initialState: SearchState = {
    value: ''
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
        resetSearch: (state) => {
            state.value = ''
        }
    }
})

export const {setSearch, resetSearch} = searchSlice.actions
export default searchSlice.reducer