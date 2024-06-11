import {render, screen} from '@testing-library/react'
import Details from '../Details'
import {Provider} from 'react-redux'
import {store} from '../../../../state/store'

describe('Details Component Tests', () => {

    const Details_Provider = ()=> {
        return (
            <Provider store={store}>
                <Details/>
            </Provider>
        )
    }

    it('Details has an initial title : Star Wars Movies',  () => {
        render(<Details_Provider/>)
            const title= screen.getByText('Star Wars Movies')
        expect(title).toBeInTheDocument()
    })

    it('Details has an initial image',  () => {
        render(<Details_Provider/>)
            const image= screen.getByAltText('starwars')
        expect(image).toBeInTheDocument()
    })

    it('Details has an initial Text',  () => {
        render(<Details_Provider/>)
            const text= screen.getByText(/The Star Wars franchise involves/i)
        expect(text).toBeInTheDocument()
    })

})