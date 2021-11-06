import React from 'react';
import { render, screen } from '@testing-library/react';

import Portfolio from './Portfolio'

describe('<Portfolio />', () => {
    const defaultProps = {}
    const wrapper = render(<Portfolio {...defaultProps} />)

    test('render', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
