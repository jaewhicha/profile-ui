import React from 'react'
import { render, screen } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import { About } from './About'

describe('<About />', () => {
    const mockStore = configureStore()
    const store = mockStore({})
    const wrapper = render(<Provider store={store}><About></About></Provider>)

    test('render', () => {
        expect(wrapper).toBeDefined()
    })
})
