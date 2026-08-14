import { useDispatch, useSelector } from 'react-redux'

import lixeira from '../../assets/images/lixeira.png'
import { RootState } from '../../store'
import { remove } from '../../store/reducers/cart'

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

const Cart = ({ isOpen, onClose }: Props) => {
    const dispatch = useDispatch()
    const items = useSelector((state: RootState) => state.cart.items)

    const total = items.reduce((accumulator, item) => {
        return accumulator + item.preco
    }, 0)

    const formattedTotal = total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    if (!isOpen) {
        return null
    }

    return (
        <CartOverlay onClick={onClose}>
            <CartContainer onClick={(event) => event.stopPropagation()}>
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

                        <CartButton type="button">Continuar com a entrega</CartButton>
                    </>
                ) : (
                    <EmptyMessage>O carrinho está vazio.</EmptyMessage>
                )}
            </CartContainer>
        </CartOverlay>
    )
}

export default Cart