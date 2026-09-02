import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import lixeira from '../../assets/images/lixeira.png'
import { RootState } from '../../store'
import { clear, remove } from '../../store/reducers/cart'

import Confirmation from '../Confirmation'
import Delivery, { DeliveryData } from '../Delivery'
import Payment, { PaymentData } from '../Payment'

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
    ProcessingMessage,
    RemoveButton,
    RemoveIcon,
    Total,
    TotalLabel,
    TotalValue
} from './styles'

type Props = {
    isOpen: boolean
    onClose: () => void
}

type CheckoutStep = 'cart' | 'delivery' | 'payment' | 'confirmation'

type CheckoutResponse = {
    orderId: string
}

const Cart = ({ isOpen, onClose }: Props) => {
    const dispatch = useDispatch()

    const items = useSelector((state: RootState) => state.cart.items)

    const [step, setStep] = useState<CheckoutStep>('cart')
    const [deliveryData, setDeliveryData] = useState<DeliveryData | null>(null)
    const [orderId, setOrderId] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const total = items.reduce((accumulator, item) => {
        return accumulator + item.preco
    }, 0)

    const formattedTotal = total.toLocaleString('en-US', {
        style: 'currency',
        currency: 'BRL'
    })

    const closeCart = () => {
        setStep('cart')
        onClose()
    }

    useEffect(() => {
        if (!isOpen) {
            return
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
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
    }, [isOpen])

    const continueToPayment = (data: DeliveryData) => {
        setDeliveryData(data)
        setStep('payment')
    }

    const finishPayment = async (paymentData: PaymentData) => {
        if (!deliveryData) {
            return
        }

        const requestBody = {
            products: items.map((item) => ({
                id: item.id,
                price: item.preco
            })),
            delivery: {
                receiver: deliveryData.receiver,
                address: {
                    description: deliveryData.address,
                    city: deliveryData.city,
                    zipCode: deliveryData.zipCode,
                    number: Number(deliveryData.number),
                    complement: deliveryData.complement
                }
            },
            payment: {
                card: {
                    name: paymentData.cardName,
                    number: paymentData.cardNumber,
                    code: Number(paymentData.cvv),
                    expires: {
                        month: Number(paymentData.expiresMonth),
                        year: Number(paymentData.expiresYear)
                    }
                }
            }
        }

        try {
            setIsLoading(true)

            const response = await fetch(
                'https://api-ebac.vercel.app/api/efood/checkout',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestBody)
                }
            )

            if (!response.ok) {
                throw new Error('Unable to complete the order')
            }

            const data: CheckoutResponse = await response.json()

            setOrderId(data.orderId)
            setStep('confirmation')
        } catch (error) {
            console.error('Error completing order:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const finishOrder = () => {
        dispatch(clear())

        setOrderId('')
        setDeliveryData(null)
        setStep('cart')

        onClose()
    }

    const getStepTitle = () => {
        if (step === 'delivery') {
            return 'Delivery'
        }

        if (step === 'payment') {
            return 'Payment'
        }

        if (step === 'confirmation') {
            return 'Order confirmed'
        }

        return 'Your cart'
    }

    if (!isOpen) {
        return null
    }

    return (
        <CartOverlay onClick={closeCart}>
            <CartContainer
                role="dialog"
                aria-modal="true"
                aria-label="Shopping cart"
                onClick={(event) => event.stopPropagation()}
            >
                <CartHeader>
                    <div>
                        <CartTitle>{getStepTitle()}</CartTitle>

                        {step === 'cart' && items.length > 0 && (
                            <CartSubtitle>
                                {items.length === 1
                                    ? '1 item selected'
                                    : `${items.length} items selected`}
                            </CartSubtitle>
                        )}
                    </div>

                    <CloseButton
                        type="button"
                        onClick={closeCart}
                        aria-label="Close cart"
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
                                            <CartItemImage src={item.foto} alt={item.nome} />

                                            <CartItemContent>
                                                <CartItemName>{item.nome}</CartItemName>

                                                <CartItemPrice>
                                                    {item.preco.toLocaleString('en-US', {
                                                        style: 'currency',
                                                        currency: 'BRL'
                                                    })}
                                                </CartItemPrice>
                                            </CartItemContent>

                                            <RemoveButton
                                                type="button"
                                                onClick={() => dispatch(remove(item.id))}
                                                aria-label={`Remove ${item.nome} from cart`}
                                            >
                                                <RemoveIcon src={lixeira} alt="" />
                                            </RemoveButton>
                                        </CartItem>
                                    ))}
                                </CartList>

                                <Total>
                                    <TotalLabel>Order total</TotalLabel>
                                    <TotalValue>{formattedTotal}</TotalValue>
                                </Total>

                                <CartButton
                                    type="button"
                                    onClick={() => setStep('delivery')}
                                >
                                    Continue to delivery
                                </CartButton>
                            </>
                        ) : (
                            <EmptyState>
                                <EmptyIcon>🛒</EmptyIcon>

                                <EmptyMessage>Your cart is empty</EmptyMessage>

                                <EmptyDescription>
                                    Explore the menu and add something delicious to your order.
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
                        onBack={() => setStep('delivery')}
                        onSubmitPayment={finishPayment}
                    />
                )}

                {step === 'confirmation' && (
                    <Confirmation orderId={orderId} onFinish={finishOrder} />
                )}

                {isLoading && (
                    <ProcessingMessage>Processing your order...</ProcessingMessage>
                )}
            </CartContainer>
        </CartOverlay>
    )
}

export default Cart