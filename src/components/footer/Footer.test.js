import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from './Footer'

describe('<Footer />', () => {
    const defaultProps = {}
    const wrapper = render(<Footer {...defaultProps} />)

    test('render', () => {
        expect(wrapper).toMatchSnapshot()
    })
})