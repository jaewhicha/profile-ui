import React from 'react'
import { render, screen } from '@testing-library/react';

import Loader from './Loader'

describe('<Loader />', () => {
    const defaultProps = {}
    const wrapper = render(<Loader
     {...defaultProps} />)

    test('render', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
