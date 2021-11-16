import React from 'react'
import { render, screen } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import App from './App'

describe('<App />', () => {
  const mockStore = configureStore()
  const store = mockStore({modal: {open: false}})
  const wrapper = render(<Provider store={store}><App></App></Provider>)

  test('render', () => {
      expect(wrapper).toBeDefined()
  })
})
