import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  const defaultProps = {}
  const wrapper = render(<App {...defaultProps} />)

  test('render', () => {
      expect(wrapper).toMatchSnapshot()
  })
})
