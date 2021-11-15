import React from 'react'
import { render, screen } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import { Contact } from './Contact'

describe('<Contact />', () => {
    const mockStore = configureStore()
    const store = mockStore({})
    const wrapper = render(<Provider store={store}><Contact></Contact></Provider>)

    test('render', () => {
        expect(wrapper).toBeDefined()
    })
})
