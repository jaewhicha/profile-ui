import React from 'react'
import { render, screen } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import { Portfolio } from './Portfolio'

describe('<Portfolio />', () => {
    const mockStore = configureStore()
    const store = mockStore({})
    const wrapper = render(<Provider store={store}><Portfolio></Portfolio></Provider>)

    test('render', () => {
        expect(wrapper).toBeDefined()
    })
})
