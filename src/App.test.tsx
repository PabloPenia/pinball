import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
	it('Renders Hello World', () => {
		// Arrange
		render(<App />)
		// Act
		// expect
		expect(
			screen.getByRole('heading', {
				level: 1,
			}),
		).toHaveTextContent('Hello World')
	})
})
