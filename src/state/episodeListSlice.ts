import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios  from 'axios'

interface EpisodeItem {
    episode_id: number
        title: string
        opening_crawl: string
        release_date: string
        poster: string
        director: string
        rating_IMD: number
        rating_RottenTomatoes: number
        rating_Metacritic: number
        general_rating : number
}

interface EpisodeListState {
    value: Array<EpisodeItem> | null
    loading: boolean
    error: string | null
}

interface DataResponse {
    results: Array<EpisodeItem>
}

interface ExtraDataResponse {
    Poster: string
    Director: string
    Ratings: {
        Source: string,
        Value: string
    }[]
}


const initialState: EpisodeListState = {
    value : null,
    loading: false,
    error: null
}

const episodeListSlice = createSlice({
    name: 'episodeLists',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getEpisodeListData.pending, (state)=>{
            state.loading = true
            state.error = null
        })

        builder.addCase(getEpisodeListData.fulfilled, (state, action: PayloadAction<DataResponse>)=>{
            state.loading = false
            state.value = action.payload.results
        })

        builder.addCase(getEpisodeListData.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload ? action.payload as string : 'Unknown error'
        })


    }
})

export const getEpisodeListData = createAsyncThunk(
    "episodeList/getEpisodeData",
    async ([endpoint1, endpoint2]: string[], thunkAPI) => {
        try {
        const BasicResults = await axios.get<DataResponse>(endpoint1)
        if(Array.isArray(BasicResults.data.results) ) {
            for(let i =0; i< BasicResults.data.results.length; i++){
                const ExtraResults = await axios.get<ExtraDataResponse>(endpoint2 + `t=Star+Wars&y=${BasicResults.data.results[i].release_date.split("-")[0]}` )
                // Ratings
                BasicResults.data.results[i]['poster'] = ExtraResults.data.Poster
                BasicResults.data.results[i]['rating_IMD'] = parseFloat(ExtraResults.data.Ratings[0].Value.split("/")[0])
                BasicResults.data.results[i]['rating_RottenTomatoes'] = parseInt(ExtraResults.data.Ratings[1].Value.split("%")[0])/10
                BasicResults.data.results[i]['rating_Metacritic'] = parseInt(ExtraResults.data.Ratings[2].Value.split("/")[0])/10
                // Director
                BasicResults.data.results[i]['director'] = ExtraResults.data.Director
                // Average Rating calculation
                BasicResults.data.results[i]['general_rating'] = ((BasicResults.data.results[i]['rating_IMD']+BasicResults.data.results[i]['rating_RottenTomatoes']
                    +BasicResults.data.results[i]['rating_Metacritic'])/3)
            }
        
        }
            return BasicResults.data

        } catch (error: any) { return thunkAPI.rejectWithValue(error.message) }
    }

)

export default episodeListSlice.reducer