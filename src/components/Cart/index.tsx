import { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import lixeira from '../../assets/images/lixeira.png'
import { RootState } from '../../store'
import { clear, remove } from '../../store/reducers/cart'

import Confirmation from '../Confirmation'
import Delivery, { DeliveryData } from '../Delivery'
import Payment from '../Payment'
import { orderPayload, placeOrder } from '../../services/efoodApi'

import {
    CartButton,
    CartContainer,
    CartHeader,
    CartItem,
    CartItemContent,
    CartItemImage,
    CartItemName,
    CartItemPrice,
    CartList,
    CartOverlay,
    CartSubtitle,
    CartTitle,
    CloseButton,
    EmptyDescription,
    EmptyIcon,
    EmptyMessage,
    EmptyState,
    RemoveButton,
    RemoveIcon,
    Total,
    TotalLabel,
    TotalValue,
} from './styles'

type Props = {
    isOpen: boolean
    onClose: () => void
}

type CheckoutStep = 'cart' | 'delivery' | 'payment' | 'confirmation'

const Cart = ({ isOpen, onClose }: Props) => {
    const dispatch = useDispatch()

    const items = useSelector((state: RootState) => state.cart.items)

    const [step, setStep] = useState<CheckoutStep>('cart')
    const [deliveryData, setDeliveryData] = useState<DeliveryData | null>(null)
    const [orderId, setOrderId] = useState('')
    const [confirmedTotal, setConfirmedTotal] = useState('')
    const intent = useRef<{ fingerprint: string; key: string } | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [checkoutError, setCheckoutError] = useState('')

    const total = items.reduce((accumulator, item) => {
        return accumulator + item.preco
    }, 0)

    const formattedTotal = total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    const closeCart = useCallback(() => {
        setStep('cart')
        setCheckoutError('')
        setIsLoading(false)

        onClose()
    }, [onClose])

    useEffect(() => {
        if (!isOpen) {
            return
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && !isLoading) {
                closeCart()
            }
        }

        const previousOverflow = document.body.style.overflow

        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = previousOverflow
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen, isLoading, closeCart])

    const continueToPayment = (data: DeliveryData) => {
        setDeliveryData(data)
        setCheckoutError('')
        setStep('payment')
    }

    const backToDelivery = () => {
        if (isLoading) {
            return
        }

        setCheckoutError('')
        setStep('delivery')
    }

    const finishPayment = async () => {
        if (!deliveryData || isLoading) return
        const payload = orderPayload(items, deliveryData)
        const fingerprint = JSON.stringify(payload)
        if (!intent.current || intent.current.fingerprint !== fingerprint) {
            intent.current = { fingerprint, key: crypto.randomUUID() }
        }
        setIsLoading(true)
        setCheckoutError('')
        try {
            const order = await placeOrder(payload, intent.current.key)
            setOrderId(order.id)
            setConfirmedTotal(order.total)
            setStep('confirmation')
        } catch (error) {
            setCheckoutError(
                error instanceof Error
                    ? error.message
                    : 'Não foi possível registrar o pedido. Tente novamente.',
            )
        } finally {
            setIsLoading(false)
        }
    }

    const finishOrder = () => {
        dispatch(clear())
        intent.current = null
        setConfirmedTotal('')

        setOrderId('')
        setDeliveryData(null)
        setCheckoutError('')
        setStep('cart')

        onClose()
    }

    const getStepTitle = () => {
        if (step === 'delivery') {
            return 'Entrega'
        }

        if (step === 'payment') {
            return 'Pagamento'
        }

        if (step === 'confirmation') {
            return 'Pedido confirmado'
        }

        return 'Seu carrinho'
    }

    if (!isOpen) {
        return null
    }

    return (
        <CartOverlay onClick={() => !isLoading && closeCart()}>
            <CartContainer
                role="dialog"
                aria-modal="true"
                aria-label="Carrinho de compras"
                onClick={(event) => event.stopPropagation()}
            >
                <CartHeader>
                    <div>
                        <CartTitle>{getStepTitle()}</CartTitle>

                        {step === 'cart' && items.length > 0 && (
                            <CartSubtitle>
                                {items.length === 1
                                    ? '1 item selecionado'
                                    : `${items.length} itens selecionados`}
                            </CartSubtitle>
                        )}
                    </div>

                    <CloseButton
                        type="button"
                        onClick={closeCart}
                        aria-label="Fechar carrinho"
                        disabled={isLoading}
                    >
                        ×
                    </CloseButton>
                </CartHeader>

                {step === 'cart' && (
                    <>
                        {items.length > 0 ? (
                            <>
                                <CartList>
                                    {items.map((item) => (
                                        <CartItem key={item.id}>
                                            <CartItemImage
                                                src={item.foto}
                                                alt={item.nome}
                                            />

                                            <CartItemContent>
                                                <CartItemName>
                                                    {item.nome}
                                                </CartItemName>

                                                <CartItemPrice>
                                                    {item.preco.toLocaleString(
                                                        'pt-BR',
                                                        {
                                                            style: 'currency',
                                                            currency: 'BRL',
                                                        },
                                                    )}
                                                </CartItemPrice>
                                            </CartItemContent>

                                            <RemoveButton
                                                type="button"
                                                onClick={() =>
                                                    dispatch(remove(item.id))
                                                }
                                                aria-label={`Remover ${item.nome} do carrinho`}
                                            >
                                                <RemoveIcon
                                                    src={lixeira}
                                                    alt=""
                                                />
                                            </RemoveButton>
                                        </CartItem>
                                    ))}
                                </CartList>

                                <Total>
                                    <TotalLabel>Total do pedido</TotalLabel>
                                    <TotalValue>{formattedTotal}</TotalValue>
                                </Total>

                                <CartButton
                                    type="button"
                                    onClick={() => setStep('delivery')}
                                >
                                    Continuar para entrega
                                </CartButton>
                            </>
                        ) : (
                            <EmptyState>
                                <EmptyIcon>🛒</EmptyIcon>

                                <EmptyMessage>Seu carrinho está vazio</EmptyMessage>

                                <EmptyDescription>
                                    Explore o cardápio e escolha um prato para começar.
                                </EmptyDescription>
                            </EmptyState>
                        )}
                    </>
                )}

                {step === 'delivery' && (
                    <Delivery
                        onBack={() => setStep('cart')}
                        onContinue={continueToPayment}
                    />
                )}

                {step === 'payment' && (
                    <Payment
                        total={total}
                        isLoading={isLoading}
                        error={checkoutError}
                        onBack={backToDelivery}
                        onSubmitPayment={finishPayment}
                    />
                )}

                {step === 'confirmation' && (
                    <>
                        <CartSubtitle>
                            Pedido simulado · total confirmado:{' '}
                            {Number(confirmedTotal).toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            })}
                        </CartSubtitle>
                        <Confirmation
                            orderId={orderId}
                            onFinish={finishOrder}
                        />
                    </>
                )}
            </CartContainer>
        </CartOverlay>
    )
}

export default Cart
