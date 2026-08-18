import { useState } from 'react'
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
    CartItem,
    CartItemContent,
    CartItemImage,
    CartItemName,
    CartItemPrice,
    CartList,
    CartOverlay,
    EmptyMessage,
    RemoveButton,
    RemoveIcon,
    Total,
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

    const formattedTotal = total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    const closeCart = () => {
        setStep('cart')
        onClose()
    }

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
                throw new Error('Não foi possível finalizar o pedido')
            }

            const data: CheckoutResponse = await response.json()

            setOrderId(data.orderId)
            setStep('confirmation')
        } catch (error) {
            console.error('Erro ao finalizar pedido:', error)
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

    if (!isOpen) {
        return null
    }

    return (
        <CartOverlay onClick={closeCart}>
            <CartContainer onClick={(event) => event.stopPropagation()}>
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
                                                    {item.preco.toLocaleString('pt-BR', {
                                                        style: 'currency',
                                                        currency: 'BRL'
                                                    })}
                                                </CartItemPrice>
                                            </CartItemContent>

                                            <RemoveButton
                                                type="button"
                                                onClick={() => dispatch(remove(item.id))}
                                                aria-label={`Remover ${item.nome} do carrinho`}
                                            >
                                                <RemoveIcon src={lixeira} alt="" />
                                            </RemoveButton>
                                        </CartItem>
                                    ))}
                                </CartList>

                                <Total>
                                    <span>Valor total</span>
                                    <TotalValue>{formattedTotal}</TotalValue>
                                </Total>

                                <CartButton
                                    type="button"
                                    onClick={() => setStep('delivery')}
                                >
                                    Continuar com a entrega
                                </CartButton>
                            </>
                        ) : (
                            <EmptyMessage>O carrinho está vazio.</EmptyMessage>
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

                {isLoading && <EmptyMessage>Finalizando pedido...</EmptyMessage>}
            </CartContainer>
        </CartOverlay>
    )
}

export default Cart