import { createSlice } from "@reduxjs/toolkit"


interface SortState {
    value : 'Episode' | 'Year'
}

const initialState: SortState = {
    value : 'Episode'
}

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSort: (state, action) => {
        state.value = action.payload
    }
  }  
})

export const { setSort } = sortSlice.actions
export default sortSlice.reducer;