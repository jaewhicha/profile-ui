import React from 'react';
import { render, screen } from '@testing-library/react';

import Testimonials from './Testimonials'

describe('<Testimonials />', () => {
    const defaultProps = {}
    const wrapper = render(<Testimonials {...defaultProps} />)

    test('render', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
