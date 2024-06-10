import {render, screen, fireEvent} from '@testing-library/react'
import SortSelect from '../SortSelect'
import {Provider} from 'react-redux'
import {store} from '../../../state/store'

describe('SortSelect Component Tests', () => {

    const SortSelect_Provider = ()=> {
        return (
            <Provider store={store}>
                <SortSelect/>
            </Provider>
        )
    }

    it('Select Label exists', () => {
        render(<SortSelect_Provider/>)
            const select = screen.getByTestId('select-label')
        expect(select).toBeInTheDocument()
    })

    it('Select Label has text', () => {
        render(<SortSelect_Provider/>)
            const select = screen.getByTestId('select-label')
        expect(select.textContent).toBe('Sort By...')
    })

    it('Select element exists', () => {
        render(<SortSelect_Provider/>)
            const select = screen.getByTestId('select-element')
        expect(select).toBeInTheDocument()
    })

    it('Select element initially sorted by Episode', () => {
        render(<SortSelect_Provider/>)
            const select = screen.getByTestId('select-element')
        expect(select.textContent).toContain('Episode')
    })

})