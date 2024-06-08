import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DetailsState {
    title: string
    info: string
}

const initialState: DetailsState = {
    title: 'Star Wars Movies',
    info: 'The Star Wars franchise involves multiple live-action and animated films. The film series started with a trilogy set in medias res that was later expanded to a trilogy of trilogies, known as the "Skywalker Saga".'
}

const detailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        setDetails: (state, action) => {
            state.title = action.payload.title
            state.info = action.payload.info
        }
    }
})

export const {setDetails} = detailsSlice.actions
export default detailsSlice.reducer