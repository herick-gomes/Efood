import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import reducer from '../../store/reducers/cart'
import Cart from './index'
import { placeOrder } from '../../services/efoodApi'
jest.mock('../../services/efoodApi', () => ({
    orderPayload: () => ({
        items: [{ product_id: 1, quantity: 1 }],
        delivery: { receiver: 'Demo' },
    }),
    placeOrder: jest.fn(),
}))
jest.mock('../Delivery', () => ({
    __esModule: true,
    default: ({ onContinue }: any) => (
        <button onClick={() => onContinue({ receiver: 'Demo' })}>
            Continue test delivery
        </button>
    ),
}))
jest.mock('../Payment', () => ({
    __esModule: true,
    default: ({ onSubmitPayment, error }: any) => (
        <>
            <p role="alert">{error}</p>
            <button onClick={onSubmitPayment}>Submit test order</button>
        </>
    ),
}))

test('retry after a lost response reuses the same idempotency key', async () => {
    Object.defineProperty(global, 'crypto', {
        value: { randomUUID: () => '11111111-1111-4111-8111-111111111111' },
        configurable: true,
    })
    const place = placeOrder as jest.Mock
    place
        .mockRejectedValueOnce(new Error('Network unavailable'))
        .mockResolvedValueOnce({ id: 'saved-order', total: '25.50' })
    const store = configureStore({
        reducer: { cart: reducer },
        preloadedState: {
            cart: {
                items: [
                    {
                        id: 1,
                        nome: 'Bowl',
                        preco: 25.5,
                        descricao: 'Demo',
                        foto: '',
                        porcao: 'One',
                    },
                ],
            },
        },
    })
    render(
        <Provider store={store}>
            <Cart isOpen onClose={jest.fn()} />
        </Provider>,
    )
    fireEvent.click(
        screen.getByRole('button', { name: 'Continue to delivery' }),
    )
    fireEvent.click(
        screen.getByRole('button', { name: 'Continue test delivery' }),
    )
    fireEvent.click(screen.getByRole('button', { name: 'Submit test order' }))
    await waitFor(() =>
        expect(screen.getByRole('alert').textContent).toContain(
            'Network unavailable',
        ),
    )
    fireEvent.click(screen.getByRole('button', { name: 'Submit test order' }))
    await screen.findByText('Demo order recorded!')
    expect(place.mock.calls[0][1]).toEqual(place.mock.calls[1][1])
    expect(place).toHaveBeenCalledTimes(2)
})
