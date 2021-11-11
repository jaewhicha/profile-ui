import React from 'react'
import { render, screen } from '@testing-library/react'

import CallToAction from './CallToAction'

describe('<CallToAction />', () => {
    const defaultProps = {}
    const wrapper = render(<CallToAction
     {...defaultProps} />)

    test('render', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
