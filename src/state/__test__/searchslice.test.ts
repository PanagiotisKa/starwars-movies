import reducer, {setSearch, resetSearch} from '../searchSlice'

describe('searchSlice tests', ()=>{

    it('should return the initial state', () => {
        expect(reducer(undefined, { type: 'unknown' })).toStrictEqual({ value: ''})
      })

      it('setSearch action should work', () => {
        expect(reducer(undefined, setSearch('test'))).toStrictEqual({ value: 'test'})
        })
    
    it('resetSearch action should work', () => {
    expect(reducer(undefined, resetSearch())).toStrictEqual({ value: ''})
    })

})