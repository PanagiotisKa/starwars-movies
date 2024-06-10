import {render, screen, fireEvent} from '@testing-library/react'
import EpisodeList from '../EpisodeList'
import {Provider} from 'react-redux'
import {store} from '../../../../state/store'

describe('EpisodeList Component Tests', () => {

    const EpisodeList_Provider = ()=> {
        return (
            <Provider store={store}>
                <EpisodeList/>
            </Provider>
        )
    }

    it('EpisodeList is Loading',  () => {
        render(<EpisodeList_Provider/>)
            const loading = screen.getByTestId('loading')
        expect(loading).toBeInTheDocument()
    })

})