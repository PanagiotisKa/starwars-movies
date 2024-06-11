import reducer, {setDetails} from '../detailsSlice'

describe('detailsSlice tests', ()=>{

    const testEpisode = {
        title: 'test',
        info: 'test',
        poster: 'test',
        rating_IMD: 1,
        director: 'test',
        rating_RottenTomatoes: 1,
        rating_Metacritic: 1,
        general_rating: 1
    }

    const initialState = {
        title: 'Star Wars Movies',
        info: 'The Star Wars franchise involves multiple live-action and animated films. The film series started with a trilogy set in medias res that was later expanded to a trilogy of trilogies, known as the "Skywalker Saga".',
        poster: 'https://cdn.pixabay.com/photo/2016/01/02/16/39/darth-vader-1118454_1280.png',
        director: '',
        rating_IMD: 0,
        rating_RottenTomatoes: 0,
        rating_Metacritic: 0,
        general_rating: 0
    }

    it('should return the initial state', () => {
        expect(reducer(undefined, { type: 'unknown' })).toStrictEqual(initialState)
      })

    it('setDetails action should work', () => {
    expect(reducer(undefined, setDetails(testEpisode))).toStrictEqual(testEpisode)
    })

})