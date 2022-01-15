import { render, screen } from '@testing-library/react'
import App from './App'

describe('Testing Input Components', () => {
  it('should render correctly App Component', () => {
    render(<App />)
    const mainDiv = screen.getByTestId('main-div')
    expect(mainDiv).not.toBeNull()
  })

  it('should render correctly Berth id', () => {
    render(<App />)
    const berthLabel = screen.getByTestId('berth-label')
    expect(berthLabel).toHaveTextContent('Berth Id')
  })

  it('should render correctly remark', () => {
    render(<App />)
    const remarkLabel = screen.getByTestId('remark-label')
    expect(remarkLabel).toHaveTextContent('Remark')
  })
})
