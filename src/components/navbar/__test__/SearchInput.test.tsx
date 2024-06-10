import {render, screen} from '@testing-library/react'
import SearchInput from '../SearchInput'
import {Provider} from 'react-redux'
import {store} from '../../../state/store'
describe('SearchInput Component Tests', () => {
    it('first Test', () => {
        
        const SearchInput_Redux = ()=> {
            return (
                <Provider store={store}>
                <SearchInput/>
            </Provider>
        )
        }
        
        render(<SearchInput_Redux/>)
      const test = screen.getByLabelText('Search Title')
        screen.debug()
    })
})