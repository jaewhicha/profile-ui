import React from 'react';
import { render, screen } from '@testing-library/react';

import { Resume } from '../Resume'

describe('<Resume />', () => {
    const defaultProps = {}
    const wrapper = render(<Resume {...defaultProps} />)

    test('render', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
