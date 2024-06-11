import reducer, {setSort} from '../sortSlice'

describe('sortSlice tests', ()=>{

    it('should return the initial state', () => {
        expect(reducer(undefined, { type: 'unknown' })).toStrictEqual({"value": "episode"})
      })
    
    it('setSort action should work', () => {
    expect(reducer(undefined, setSort('test'))).toStrictEqual({"value": "test"})
    })

})
