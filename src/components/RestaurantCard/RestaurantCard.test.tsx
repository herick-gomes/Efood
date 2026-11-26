import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import RestaurantCard from './index'

const props = {
    id: 1,
    title: 'Quintal da Vila',
    description: 'Comida brasileira',
    image: '/demo.jpg',
    category: 'Brazilian',
    rating: 0,
}

test('does not display fabricated ratings for unrated restaurants', () => {
    render(
        <MemoryRouter>
            <RestaurantCard {...props} />
        </MemoryRouter>,
    )
    expect(screen.queryByText('0')).toBeNull()
    expect(screen.queryByText('★')).toBeNull()
    expect(screen.getByText('Brasileira')).toBeTruthy()
    expect(screen.getByText('Ver restaurante')).toBeTruthy()
})

test('displays a positive rating when one is available', () => {
    render(
        <MemoryRouter>
            <RestaurantCard {...props} rating={4.5} />
        </MemoryRouter>,
    )
    expect(screen.getByLabelText('Avaliação: 4.5 de 5 estrelas')).toBeTruthy()
})
