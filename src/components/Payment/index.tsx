import { ChangeEvent, FormEvent, useState } from 'react'
import { authenticate, hasSession, logout } from '../../services/efoodApi'
import {
    Button,
    ButtonsContainer,
    CheckoutError,
    FieldGroup,
    Label,
    PriceBox,
    PriceLabel,
    PriceValue,
    Subtitle,
    Title,
} from './styles'

type Props = {
    total: number
    isLoading: boolean
    error: string
    onBack: () => void
    onSubmitPayment: () => void | Promise<void>
}

const Payment = ({
    total,
    isLoading,
    error,
    onBack,
    onSubmitPayment,
}: Props) => {
    const [signedIn, setSignedIn] = useState(hasSession())
    const [register, setRegister] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [authError, setAuthError] = useState('')
    const [authBusy, setAuthBusy] = useState(false)
    const busy = isLoading || authBusy
    const signIn = async (event: FormEvent) => {
        event.preventDefault()
        setAuthBusy(true)
        setAuthError('')
        try {
            await authenticate(username, password, register)
            setPassword('')
            setSignedIn(true)
        } catch (error) {
            setAuthError(
                error instanceof Error ? error.message : 'Unable to sign in.',
            )
        } finally {
            setAuthBusy(false)
        }
    }
    const submit = async () => {
        await onSubmitPayment()
        setSignedIn(hasSession())
    }
    const signOut = async () => {
        setAuthBusy(true)
        setAuthError('')
        try {
            await logout()
        } catch {
            setAuthError(
                'Local session cleared. The refresh token could not be revoked remotely.',
            )
        } finally {
            setSignedIn(false)
            setAuthBusy(false)
        }
    }
    return (
        <section aria-label="Demo checkout">
            <Title>Review your demo order</Title>
            <Subtitle>
                This is a portfolio demonstration. No payment is collected and
                no real delivery is scheduled. Do not enter card information.
            </Subtitle>
            <PriceBox>
                <PriceLabel>Estimated total</PriceLabel>
                <PriceValue>
                    {total.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'BRL',
                    })}
                </PriceValue>
            </PriceBox>
            <Subtitle>
                The server checks current prices and availability. Your
                confirmed total appears after submission.
            </Subtitle>
            {(error || authError) && (
                <CheckoutError role="alert">
                    <strong>Unable to continue</strong>
                    <span>{authError || error}</span>
                </CheckoutError>
            )}
            {!signedIn ? (
                <form onSubmit={signIn}>
                    <FieldGroup>
                        <Label htmlFor="checkout-username">Username</Label>
                        <input
                            id="checkout-username"
                            value={username}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setUsername(e.target.value)
                            }
                            autoComplete="username"
                            required
                            maxLength={150}
                            disabled={busy}
                        />
                    </FieldGroup>
                    <FieldGroup>
                        <Label htmlFor="checkout-password">Password</Label>
                        <input
                            id="checkout-password"
                            type="password"
                            value={password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setPassword(e.target.value)
                            }
                            autoComplete={
                                register ? 'new-password' : 'current-password'
                            }
                            required
                            minLength={register ? 10 : undefined}
                            maxLength={128}
                            disabled={busy}
                        />
                    </FieldGroup>
                    <ButtonsContainer>
                        <Button type="submit" disabled={busy}>
                            {authBusy
                                ? 'Please wait...'
                                : register
                                  ? 'Create account'
                                  : 'Sign in'}
                        </Button>
                        <Button
                            type="button"
                            $secondary
                            disabled={busy}
                            onClick={() => {
                                setRegister(!register)
                                setAuthError('')
                            }}
                        >
                            {register
                                ? 'Already have an account? Sign in'
                                : 'New here? Create an account'}
                        </Button>
                    </ButtonsContainer>
                </form>
            ) : (
                <ButtonsContainer>
                    <Button type="button" onClick={submit} disabled={busy}>
                        {isLoading
                            ? 'Placing order...'
                            : 'Place simulated order'}
                    </Button>
                    <Button
                        type="button"
                        $secondary
                        onClick={signOut}
                        disabled={busy}
                    >
                        Sign out
                    </Button>
                </ButtonsContainer>
            )}
            <ButtonsContainer>
                <Button
                    type="button"
                    $secondary
                    onClick={onBack}
                    disabled={busy}
                >
                    Back to delivery
                </Button>
            </ButtonsContainer>
        </section>
    )
}
export default Payment
