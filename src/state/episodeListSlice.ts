import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios  from 'axios'

interface EpisodeItem {
    episode_id: number
        title: string
        opening_crawl: string
        release_date: string
        // rating_IMD: number
        // rating_RottenTomatoes: number
        // rating_Metacritic: number
        // poster: string
}

interface EpisodeListState {
    value: Array<EpisodeItem> | null
    loading: boolean
    error: string | null
}

interface DataResponse {
    results: Array<EpisodeItem>
}

interface DataError {
    message: string
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
    async (endpoint: string, thunkAPI) => {
        try {
            // first request
        const { data } = await axios.get<DataResponse>(endpoint)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue({message: error })
        }
    }

)

export default episodeListSlice.reducer