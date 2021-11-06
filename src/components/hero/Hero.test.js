import React from 'react';
import { render, screen } from '@testing-library/react';

import Hero from './Hero'

describe('<Hero />', () => {
    const defaultProps = {}
    const wrapper = render(<Hero {...defaultProps} />)

    test('render', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
