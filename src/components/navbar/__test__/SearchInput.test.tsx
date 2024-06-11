import {render, screen} from '@testing-library/react'
import SearchInput from '../SearchInput'
import {Provider} from 'react-redux'
import {store} from '../../../state/store'

describe('SearchInput Component Tests', () => {

    const SearchInput_Provider = ()=> {
        return (
            <Provider store={store}>
                <SearchInput/>
            </Provider>
        )
    }

    it('Text Field exists', () => {
        render(<SearchInput_Provider/>)
            const textField = screen.getByLabelText('Search Title')
        expect(textField).toBeInTheDocument()
    })

    it('Text Field exists', () => {
        render(<SearchInput_Provider/>)
            const textField = screen.getByLabelText('Search Title')
        expect(textField.textContent).toBe('')
    })


})