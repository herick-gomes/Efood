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
                error instanceof Error ? error.message : 'Não foi possível entrar.',
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
                'Sessão local encerrada, mas não foi possível revogar o token remoto.',
            )
        } finally {
            setSignedIn(false)
            setAuthBusy(false)
        }
    }
    return (
        <section aria-label="Finalização de pedido simulado">
            <Title>Revise seu pedido de demonstração</Title>
            <Subtitle>
                Este é um projeto demonstrativo. Nenhum pagamento é cobrado e
                nenhuma entrega real será realizada. Não informe dados de cartão.
            </Subtitle>
            <PriceBox>
                <PriceLabel>Total estimado</PriceLabel>
                <PriceValue>
                    {total.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    })}
                </PriceValue>
            </PriceBox>
            <Subtitle>
                A API verifica preços e disponibilidade antes de registrar o pedido.
                O total final aparece após a confirmação.
            </Subtitle>
            {(error || authError) && (
                <CheckoutError role="alert">
                    <strong>Não foi possível continuar</strong>
                    <span>{authError || error}</span>
                </CheckoutError>
            )}
            {!signedIn ? (
                <form onSubmit={signIn}>
                    <FieldGroup>
                        <Label htmlFor="checkout-username">Usuário</Label>
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
                        <Label htmlFor="checkout-password">Senha</Label>
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
                                ? 'Aguarde...'
                                : register
                                  ? 'Criar conta'
                                  : 'Entrar'}
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
                                ? 'Já tem conta? Entrar'
                                : 'Ainda não tem conta? Cadastre-se'}
                        </Button>
                    </ButtonsContainer>
                </form>
            ) : (
                <ButtonsContainer>
                    <Button type="button" onClick={submit} disabled={busy}>
                        {isLoading
                            ? 'Registrando pedido...'
                            : 'Confirmar pedido simulado'}
                    </Button>
                    <Button
                        type="button"
                        $secondary
                        onClick={signOut}
                        disabled={busy}
                    >
                        Sair
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
                    Voltar à entrega
                </Button>
            </ButtonsContainer>
        </section>
    )
}
export default Payment
