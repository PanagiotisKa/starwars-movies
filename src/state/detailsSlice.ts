import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DetailsState {
    title: string
    info: string
    poster: string
    rating_IMD: number
    rating_RottenTomatoes: number
    rating_Metacritic: number
}

const initialState: DetailsState = {
    title: 'Star Wars Movies',
    info: 'The Star Wars franchise involves multiple live-action and animated films. The film series started with a trilogy set in medias res that was later expanded to a trilogy of trilogies, known as the "Skywalker Saga".',
    poster: 'https://cdn.pixabay.com/photo/2016/01/02/16/39/darth-vader-1118454_1280.png',
    rating_IMD: 0,
    rating_RottenTomatoes: 0,
    rating_Metacritic: 0
}

const detailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        setDetails: (state, action) => {
            state.title = action.payload.title
            state.info = action.payload.info
            state.poster = action.payload.poster
            state.rating_IMD = action.payload.rating_IMD
            state.rating_RottenTomatoes = action.payload.rating_RottenTomatoes
            state.rating_Metacritic = action.payload.rating_Metacritic
        }
    }
})

export const {setDetails} = detailsSlice.actions
export default detailsSlice.reducer