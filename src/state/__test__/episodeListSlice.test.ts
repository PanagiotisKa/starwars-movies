import reducer, {getEpisodeListData} from '../episodeListSlice'

describe('episodeListSlice tests', ()=>{

    const initialState = {
        value : null,
        loading: false,
        error: null
    }

    it('should return the initial state', () => {
        expect(reducer(undefined, { type: 'unknown' })).toStrictEqual(initialState)
      })

})