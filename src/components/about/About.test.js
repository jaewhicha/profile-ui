import React from 'react';
import { render, screen } from '@testing-library/react';

import About from './About'

describe('<About />', () => {
    const defaultProps = {}
    const wrapper = render(<About {...defaultProps} />)

    test('render', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
