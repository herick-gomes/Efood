import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Payment from './index'
import { authenticate, hasSession } from '../../services/efoodApi'
jest.mock('../../services/efoodApi', () => ({
    authenticate: jest.fn(),
    hasSession: jest.fn(),
    logout: jest.fn(),
}))
const auth = authenticate as jest.Mock
const session = hasSession as jest.Mock
beforeEach(() => {
    jest.clearAllMocks()
    session.mockReturnValue(false)
})

test('requires sign-in for simulated checkout and does not collect cards', async () => {
    auth.mockResolvedValue(undefined)
    const submit = jest.fn()
    render(
        <Payment
            total={25.5}
            isLoading={false}
            error=""
            onBack={jest.fn()}
            onSubmitPayment={submit}
        />,
    )
    expect(screen.queryByLabelText(/card|cvv/i)).toBeNull()
    fireEvent.change(screen.getByLabelText('Username'), {
        target: { value: 'demo' },
    })
    fireEvent.change(screen.getByLabelText('Password'), {
        target: { value: 'test-password' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Sign in' }))
    await screen.findByRole('button', { name: 'Place simulated order' })
    expect(auth).toHaveBeenCalledWith('demo', 'test-password', false)
    fireEvent.click(
        screen.getByRole('button', { name: 'Place simulated order' }),
    )
    await waitFor(() => expect(submit).toHaveBeenCalledTimes(1))
})

test('shows login errors and keeps checkout unavailable', async () => {
    auth.mockRejectedValue(new Error('Invalid credentials'))
    render(
        <Payment
            total={10}
            isLoading={false}
            error=""
            onBack={jest.fn()}
            onSubmitPayment={jest.fn()}
        />,
    )
    fireEvent.change(screen.getByLabelText('Username'), {
        target: { value: 'demo' },
    })
    fireEvent.change(screen.getByLabelText('Password'), {
        target: { value: 'wrong' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Sign in' }))
    await screen.findByRole('alert')
    expect(screen.getByRole('alert').textContent).toContain(
        'Invalid credentials',
    )
    expect(
        screen.queryByRole('button', { name: 'Place simulated order' }),
    ).toBeNull()
})
