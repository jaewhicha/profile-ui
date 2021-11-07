import React from 'react'
import { render, screen } from '@testing-library/react'

import Header from './Header'

describe('<Header />', () => {
    const defaultProps = {}
    const wrapper = render(<Header
     {...defaultProps} />)

    test('render', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
