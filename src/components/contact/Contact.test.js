import React from 'react';
import { render, screen } from '@testing-library/react';

import { Contact } from '../Contact'

describe('<Contact />', () => {
    const defaultProps = {}
    const wrapper = render(<Contact {...defaultProps} />)

    test('render', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
